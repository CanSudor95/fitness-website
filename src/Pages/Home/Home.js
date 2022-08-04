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
            <NavLink
              to="Login"
              className={({ isActive }) =>
                isActive ? "activeStyle" : "loginInactiveStyle"
              }
            >
              Join Now
            </NavLink>
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
      <div className="content2">
        <h2 style={{ fontSize: "40px" }}>
          What is Your <b style={{ color: "orange" }}>#1 </b>
          Goal?
          <hr />
        </h2>
        <div className="options">
          <div className="Image1"></div>
          <div className="text">
            <h2 style={{ color: "orange", fontSize: "40px" }}>Gain Mass</h2>
            <p style={{ paddingBottom: "10px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              aliquam mollitia quisquam nulla a totam similique dolore natus at
              aspernatur praesentium aut labore magnam, facere voluptatum
              explicabo cumque dolores. Odit vitae molestiae quas nemo hic ullam
              numquam itaque quis ut nobis? Saepe corrupti consectetur deleniti?
              Et provident similique labore vitae?
            </p>
            <NavLink
              to="Exercises"
              className={({ isActive }) =>
                isActive ? "activeStyle" : "loginInactiveStyle"
              }
            >
              Learn More
            </NavLink>
          </div>
        </div>
        <div className="options">
          <div className="text">
            <h2 style={{ color: "orange", fontSize: "40px" }}>Lose Weight</h2>
            <p style={{ paddingBottom: "10px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              aliquam mollitia quisquam nulla a totam similique dolore natus at
              aspernatur praesentium aut labore magnam, facere voluptatum
              explicabo cumque dolores. Odit vitae molestiae quas nemo hic ullam
              numquam itaque quis ut nobis? Saepe corrupti consectetur deleniti?
              Et provident similique labore vitae?
            </p>
            <NavLink
              to="Exercises"
              className={({ isActive }) =>
                isActive ? "activeStyle" : "loginInactiveStyle"
              }
            >
              Learn More
            </NavLink>
          </div>
          <div className="Image2"></div>{" "}
        </div>

        {/* NEW CONTENT */}
      </div>
      <div className="options">
        <div className="option1">
          <p>Gain Mass </p>
          <NavLink
            to="Exercises"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
          >
            Learn More
          </NavLink>
        </div>
        <div className="option2">
          <p>Lose Fat</p>
          <NavLink
            to="Exercises"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
          >
            Learn More
          </NavLink>
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
          <NavLink
            to="Contact"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "inactiveStyle"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      {/* Content 4 */}
    </section>
  );
}

export default Home;
