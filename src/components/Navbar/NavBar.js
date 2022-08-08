import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/" className="nav-brand">
          <img src="images/icons8-workout-64.png" alt="" />
          <p>THE GYM</p>
        </NavLink>
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
        <NavLink
          to="Login"
          className={({ isActive }) =>
            isActive ? "activeStyle" : "inactiveStyle"
          }
        >
          Login/SignUp
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
