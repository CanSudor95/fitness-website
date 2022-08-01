import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      {/* Content 1 */}
      <div className="header">
        <div className="content1">
          <div>
            <p>
              It's time to <b>UNLEASH</b> the beast inside you
            </p>
            <NavLink to="Login">Join Now</NavLink>
          </div>
        </div>
      </div>

      {/* <div className="about">
        <div className="info">
          <h2>ABOUT US</h2>
          <p>
            We provide a online personal exercise library where you, or your
            personal trainer can create a custom made exercise program for your
            desired goal. <br />
          </p>
          <NavLink to="About">Learn More</NavLink>
        </div>
      </div> */}

      {/* Content 2 */}
      <div className="content2">What is your #1 Goal?</div>
      <div className="options">
        <div className="option1">
          <p>Gain Mass </p>
          <NavLink to="Exercises">Learn More</NavLink>
        </div>
        <div className="option2">
          <p>Lose Fat</p>
          <NavLink to="Exercises">Learn More</NavLink>
        </div>
      </div>

      {/* Content 3 */}
      <div className="contact">
        <div className="info">
          <h2>CONTACT US</h2>
          <p>
            We provide a online personal exercise library where you, or your
            personal trainer can create a custom made exercise program for your
            desired goal. <br />
          </p>
          <NavLink to="Contact">Contact Us</NavLink>
        </div>
      </div>
      {/* Content 4 */}

      <footer>Footer</footer>
    </section>
  );
}

export default Home;
