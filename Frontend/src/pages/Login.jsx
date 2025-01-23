import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      console.log(response)
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-over">
          <div className="login-details">
            <div className="">
              <h2>HI Welcome Back</h2>
              <img src="/Images/sign-img.jpg" alt="" />
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input"
                required
                placeholder="Enter your email"
                title="Please enter email"
                name="email"
                autoFocus= "yes"
              />
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input"
                required
                placeholder="Password"
                title="Enter password"
                name="password"
              />

              <div className="show">
                <input type="checkbox" />
                <h6>Show Password</h6>
              </div>

              <button>Sign In</button>
              <p>
                <Link to="/forgot-password">Forgot password</Link>
              </p>

              <p>
                Don't have an account yet? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
