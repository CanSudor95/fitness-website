import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      {/*       <nav className="nav">
        <NavLink to="/" className="nav-brand">
          <span>The Gym</span>
        </NavLink> */}
      <div className="nav">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="Exercises"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Exercises
        </NavLink>
        <NavLink
          to="About"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="Contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="Login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Login/SignUp
        </NavLink>
      </div>
    </>
  );
}
let activeStyle = {
  textDecoration: "none",
  backgroundColor: "#555",
};

export default NavBar;
