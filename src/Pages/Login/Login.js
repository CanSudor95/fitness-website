import React, { useState } from "react";
import "./Login.css";

function Login({ logIn, error, LogInToggle, toggle, LogOut }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  /*   const [toggle, setToggle] = useState(true); */

  const submitHandler = (e) => {
    e.preventDefault();
    logIn(details);
  };

  return (
    <div className="loginpage">
      {toggle ? (
        <form className="loginbar" onSubmit={submitHandler}>
          <div className="loginheader">
            <p>Login</p>
          </div>
          {error ? (
            <div className="error">
              <b>
                Please type in the given information below for login, this is a
                dummy login, it will only accept the below email and password
              </b>
            </div>
          ) : (
            ""
          )}
          <p>
            Please type: <br /> "admin@admin.com" for email and
            <br /> "admin123" for password.
          </p>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="email@address.com"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <input type="submit" value="Login" />
        </form>
      ) : (
        <div className="loginbar" onSubmit={submitHandler}>
          <p>Welcome {details.email}</p>
          <button
            onClick={(e) => {
              LogOut();
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
export default Login;
