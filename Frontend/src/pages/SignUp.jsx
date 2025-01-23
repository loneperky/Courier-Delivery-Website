import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
  const [err, setErr] = useState("Error email Already registered");
  const [fullname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response =  await  axios.post("http://localhost:3000/auth/signup", {
        fullname,
        email,
        password,
      });
        alert('Registration Successful')
        navigate("/login"); // Redirect to login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-submit">
        <div className="wello">
          <div className="create">
            <h1>Create account</h1>
            <p className="join">Join our 100% free creative network</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="btn_api">
              <button className="apple-btn">
                <img src="/Images/apple.png" alt="" />
                <p>Sign up with Apple</p>
              </button>
              <button>
                <img src="/Images/google.png" alt="" />
                <p>Sign up with Google</p>
              </button>
            </div>
            <div className="name">
              <label className="label" htmlFor="Fname">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your name"
                required
                autoFocus
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <label className="label" htmlFor="Email">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              required
             
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label" htmlFor="Password">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
            
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="subTn" type="submit">
              Sign up
            </button>
            <p>
              Already have an account?<Link to="/login">Log in</Link>
            </p>
          </form>
          <p>By Creating an account you agree to our Terms of use</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
