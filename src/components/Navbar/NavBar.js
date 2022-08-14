import { NavLink } from "react-router-dom";
import "./Navbar.css";
import react, { useState } from "react";

function NavBar({ toggle, LogOut }) {
  return (
    <nav className="nav">
      <div>
        {/* <NavLink to="/" className="nav-brand">
          <img src="images/icons8-workout-64.png" alt="" />
          <p className="brand">THE GYM</p>
        </NavLink> */}
      </div>
      <div className="nav-child">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="Exercises"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          Exercises
        </NavLink>

        <NavLink
          to="MyExercises"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          My Exercises
        </NavLink>

        <NavLink
          to="Contact"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          Contact
        </NavLink>
        {toggle ? (
          <NavLink
            to="Login"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
          >
            Login
          </NavLink>
        ) : (
          <button
            onClick={(e) => {
              LogOut();
            }}
            className="activeStyle"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
