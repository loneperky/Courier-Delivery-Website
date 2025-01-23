import express, { Router } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import pool from "./db.js";

dotenv.config();

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  const { subscribe } = req.body;
  const newEmail = await pool.query(
    "INSERT INTO users_information (subscribe) VALUE ($1)"
  );
  res.json(newEmail)
  console.log(newEmail)
});

router.post("/signup", async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const checkUser = await pool.query(
      "SELECT * FROM users_information WHERE email_address = $1",
      [email]
    );
    console.log(checkUser);
    if (checkUser.rows.length > 0) {
      res.json({ message: "User already Exist" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users_information (fullname,email_address,password) VALUES ($1,$2,$3) RETURNING *",
      [fullname, email, hashPassword]
    );
    console.log(newUser);
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.log("There was an error", error);
  }
});

// reactjs nextjs typescript redux tailwind

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await pool.query(
      "SELECT * FROM users_information WHERE email_address = $1",
      [email]
    );
    if (checkUser.rows.length == 0) {
      res.status(401).json({ message: "User does not exist" });
    }

    const isValid = await bcryptjs.compare(
      password,
      checkUser.rows[0].password
    );

    if (!isValid) return res.status(400).json({ error: "Invalid Credentials" });

    const token = jwt.sign(
      { email: checkUser.rows[0].email },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );
    res.json({ token });
  } catch (error) {
    console.log("There was an error", error);
  }
});

export const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(403).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.email;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

router.get("/dashboard", verifyToken, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT * FROM users_information  WHERE id = $1",
      [req.user.id]
    );
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/dashboard/name", async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT * FROM users_information WHERE id = $1",
      [req.user.id]
    );
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

export default router;
