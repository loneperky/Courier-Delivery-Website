import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'
const Forgot = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  axios.defaults.withCredentials = true

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await axios.post("http://localhost:3001/auth/forgot-password", {
      email,
    })
    if(response.data.status){
      alert('Check your email for reset password link')
    }
    
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="login-over">
          <div className="login-details">
            <div className="">
              <h2>Search your account </h2>

              <input
                type="text"
                onChange={(e)=>{setEmail(e.target.value)}}
                className="input"
                required
                placeholder="Enter your email"
                title="Please enter email"
                name="email"
              />
              <button type='submit'>Send</button>
            </div>
          </div>
        </div>
        
    </form>
 
    </>
  )
}

export default Forgot