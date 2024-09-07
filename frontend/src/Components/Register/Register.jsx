import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

    const history = useNavigate(0);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setUser((prevUser)=> ({...prevUser,[name]:value}));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        sendRequest().then(()=>{
            alert("Register Success");
            history("/userdetails");
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    const sendRequest = async() =>{
        await axios.post("http://localhost:5000/register",{
            username:String(user.username),
            email:String(user.email),
            password:String(user.password),
        })
        .then((res)=> res.data);
    }


  return (
    <div>
      <NavBar></NavBar>
      <h1>User Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" value={user.username} onChange={handleInputChange} name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={user.email} onChange={handleInputChange} name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={user.password} onChange={handleInputChange} name="password" required />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
