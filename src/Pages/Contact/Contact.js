import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactpage">
      <div className="contactform">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Please Enter Your Name" />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          placeholder="Please Enter Your email Address"
        />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
export default Contact;
