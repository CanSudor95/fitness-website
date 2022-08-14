import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />

        <div className="row">
          {/* Column1 */}
          <div className="col">
            <ul className="list-unstyled">
              <b>MAIN LINKS</b>
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="Contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="Login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <ul className="list-unstyled">
              <b>EXERCISES</b>
              <li>
                <Link
                  to="Exercises"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Exercises
                </Link>
              </li>
              <li>
                <Link
                  to="MyExercises"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  My Exercises
                </Link>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <ul className="list-unstyled">
              <b>CONTACT</b>
              <li>Istanbul, Turkey</li>
              <li>Atasehir Ataturk Street</li>
              <li>(+90)123-45-67</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SPORT TEAM INC. | All rights
            reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
