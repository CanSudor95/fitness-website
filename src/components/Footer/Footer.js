import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div>
          <h2>Footer</h2>
          <hr />
        </div>
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>123-45-67</li>
              <li>Istanbul, Turkey</li>
              <li>Atasehir Ataturk Street</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <ul className="list-unstyled">
              <li></li>
              <li>Istanbul, Turkey</li>
              <li>Atasehir Ataturk Street</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <ul className="list-unstyled">
              <li>123-45-67</li>
              <li>Istanbul, Turkey</li>
              <li>Atasehir Ataturk Street</li>
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
