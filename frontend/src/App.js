import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import Users from "./Components/UserDetails/Users";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ContactUs from "./Components/ContactUs/ContactUs";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/userdetails" element={<Users />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/log" element={<Login />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} /> 
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
