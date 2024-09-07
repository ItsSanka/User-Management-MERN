import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const history = useNavigate(0);
    const [user, setUser] = useState({
        name: "",
        email: "",
   
    });

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setUser((prevUser)=> ({...prevUser,[name]:value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await sendRequest();
            if(response.status === "ok"){
                    alert("Login success");
                    history("/userdetails");
            }else{
                alert("Login error");
            }
        }catch(err){
            alert("error" + err.message);
        }

    };

    const sendRequest = async() =>{
        return await axios.post("http://localhost:5000/login",{
            email:user.email,
            password:user.password,
        })
        .then((res)=> res.data);
    }



  return (
    <div>
      <NavBar></NavBar>  
      <h1>User Login</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={user.email} onChange={handleInputChange} name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={user.password} onChange={handleInputChange} name="password" required />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
