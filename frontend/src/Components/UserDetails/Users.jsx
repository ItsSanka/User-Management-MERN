import React, { useEffect, useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import User from "../User/User";
import "./UserDetails.css";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "User Report",
    onAfterPrint: () => alert("Users Report Successfully Downloaded!"),
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  const handleSendReport =() =>{
    // whatsapp chat url

    const phoneNumber = "+94714597651";
    const message = encodeURIComponent("Selected user reports");
    const WhatsAppUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
    // Open the WhatsApp chat in a new tab
    window.open(WhatsAppUrl, "_blank");

  }


  return (
    <>
      <NavBar />
      <div className="user-details-container">
        <div className="main-box">
          <div className="box">
            <h1>User Details</h1>
            <button onClick={handlePrint}>Download Report</button>
            <button className="whatsapp" onClick={handleSendReport}>Share on Whatsapp</button>
          </div>
          <div className="box">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              name="search"
              placeholder="Search User Details"
            ></input>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        {noResults ? (
          <div>
            <p>No Users Found</p>
          </div>
        ) : (
          <div ref={ComponentsRef} className="users-list">
            {users &&
              users.map((user, i) => (
                <div key={i} className="user-card">
                  <User user={user} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
