import React from "react"; 
import "./user.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function User(props) {
  const {_id, name, gmail, age, address} = props.user;
  const history = useNavigate();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:5000/users/${_id}`)
        .then(res => res.data)
        .then(() => {
          history("/");
          history("/userdetails");
        });
    }
  };

  return (
    <div className="user-container">
      <br />
      <p>ID: {_id}</p>
      <p>Name: {name}</p>
      <p>Gmail: {gmail}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <Link className="btn" to={`/userdetails/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default User;
