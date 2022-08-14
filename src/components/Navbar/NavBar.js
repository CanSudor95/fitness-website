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
          HOME
        </NavLink>
        <NavLink
          to="Exercises"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          EXERCISES
        </NavLink>

        <NavLink
          to="MyExercises"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          MY EXERCISES
        </NavLink>

        <NavLink
          to="Contact"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          CONTACT US
        </NavLink>
        {toggle ? (
          <NavLink
            to="Login"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
          >
            LOGIN
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
