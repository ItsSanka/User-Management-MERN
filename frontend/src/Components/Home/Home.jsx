import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="home-container">
        {/* Hero Section with Carousel */}
        <section className="hero-section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://frontegg.com/wp-content/uploads/2022/03/rbac-2.png"
                alt="Feature 1"
              />
              <Carousel.Caption className="carousel-caption-fixed">
                <h1 className="hero-title">Manage Users Efficiently</h1>
                <p className="hero-description">
                  Simplify your user management tasks with our easy-to-use
                  system. Add, update, and view user details all in one place.
                </p>
                <Link to="/regi" className="hero-button">
                  Get Started
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.egnyte.com/sites/default/files/inline-images/The%20expansion%20of%20cloud%20applications%20has%20added%20to....png"
                alt="Feature 2"
              />
              <Carousel.Caption className="carousel-caption-fixed">
                <h1 className="hero-title">Effortless User Management</h1>
                <p className="hero-description">
                  Streamline your operations with intuitive user management
                  tools.
                </p>
                <Link to="/regi" className="hero-button">
                  Get Started
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg"
                alt="Feature 3"
              />
              <Carousel.Caption className="carousel-caption-fixed">
                <h1 className="hero-title">Your Data, Your Control</h1>
                <p className="hero-description">
                  Take control of your data with our powerful user management
                  features.
                </p>
                <Link to="/regi" className="hero-button">
                  Get Started
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Other Sections */}
        <section className="home-intro">
          <h2>Introduction</h2>
          <p>
            Our User Management System is designed to streamline the management
            of user information, making it simple and efficient to perform
            essential tasks. With this system, you can easily add new users,
            update existing user details, and view comprehensive user profiles
            all from a user-friendly interface. The system ensures that managing
            user data is a smooth experience, offering intuitive controls and
            robust functionality. Whether you’re handling a large database of
            users or a small team, our system provides the tools you need to
            maintain accurate and up-to-date user information, ensuring data
            integrity and ease of access at all times.
          </p>
          <div className="home-links">
          <Link to="/adduser" className="home-link">
            Add User
          </Link>
          <Link to="/userdetails" className="home-link">
            View Users
          </Link>
        </div>
        </section>

        <section className="home-features">
          <h2>Features</h2>
          <ul>
            <li>Add new users with ease.</li>
            <li>Update existing user information.</li>
            <li>View user details in a structured format.</li>
            <li>Responsive design for access on various devices.</li>
            <li>Report generator</li>
            <li>Search Users</li>
          </ul>
        </section>

        <section className="home-contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need support, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> itssanka97@gmail.com
          </p>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
