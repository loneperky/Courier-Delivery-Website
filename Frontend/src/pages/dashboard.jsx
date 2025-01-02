import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:3000/auth/dashboard", {
          headers: { "auth-token": token },
        });
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (!user) return <p>Loading...</p> 
  return (
    <>
        <h1>Welcome, {user.fullname}</h1>
        <p>{user}</p>
        <button type="submit">LogOut</button>
    </>
  )

};


export default Dashboard;