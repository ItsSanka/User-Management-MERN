import React, { useRef } from "react";
import NavBar from "../NavBar/NavBar";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kw7t34s",
        "template_ke0cuuc",
        form.current,
        "wJenYu8OT4cnDVlrB"
      )
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactUs;
