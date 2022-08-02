import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="contactpage">
      <div className="contactform">
        <div className="loginheader">
          <p>Login</p>
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Please Enter Your Name" />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          placeholder="Please Enter Your email Addres"
        />
        <input type="submit" value="Login" />
      </div>
    </div>
  );
}
export default Login;
