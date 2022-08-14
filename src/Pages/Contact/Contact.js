import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contactpage">
      <div className="contactform">
        <p>
          To provide best help please contact us by filling the form. Our
          personal trainers will return to your mail <b>within 24 hours</b>.
        </p>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Please Enter Your Name" />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          placeholder="Please Enter Your email Addres"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Please type in any details you want to learn from our trainers..."
        />
        <input type="submit" value="Submit" onClick={myFunction} />
      </div>
    </div>
  );
}
function myFunction() {
  alert(
    "Hello! Currently we cannot provide any help now. Thank you for your understanding."
  );
}
export default Contact;
