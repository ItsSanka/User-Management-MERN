import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addUser.css";

const AddUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest();
      navigate('/userdetails'); // Navigate to the userdetails page
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      age: String(inputs.age),
      address: String(inputs.address),
    }).then((res) => res.data);
  };

  return (
    <div className="add-user-container">
      <NavBar />
      <h1 className="add-user-heading">Add User</h1>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gmail">Email:</label>
          <input
            type="email"
            id="gmail"
            name="gmail"
            value={inputs.gmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={inputs.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
