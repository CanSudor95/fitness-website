import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      {/* Header Part Starts */}
      <div className="header">
        <div className="content1">
          <div>
            <p>
              IT'S TIME TO <b>UNLEASH</b> THE BEAST INSIDE OF YOU
            </p>
            {/* <NavLink
              to="Login"
              className={({ isActive }) =>
                isActive ? "activeStyle" : "loginInactiveStyle"
              }
            >
              Join Now
            </NavLink> */}
          </div>
        </div>
      </div>
      {/* Header Part Finishes  */}

      {/* About Part Starts */}
      <div className="about">
        <h2>Why Fitness Is Important In Your Life?</h2>
        <hr />
        <div className="info">
          <img
            src="images/jakob-owens-unsplash.jpg"
            style={{
              width: "auto",
              height: "500px",
              marginRight: "30px",
              borderRadius: "5px",
            }}
            alt=""
          />
          <div>
            <div className="info-body">
              <img
                className="info-logo"
                src={"images/icons8-happy-48.png"}
                alt={"no image"}
              />
              <div className="info-text">
                <h3>Happy Body Happy Life</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae hic officia iste ipsa, rerum reiciendis sequi harum
                  esse dolorum dolor.
                </p>
              </div>
            </div>
            <div className="info-body">
              <img
                className="info-logo"
                src={"images/icons8-chevron-24.png"}
                alt={"no image"}
              />
              <div className="info-text">
                <h3>More Energy For Everything</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae hic officia iste ipsa, rerum reiciendis sequi harum
                  esse dolorum dolor.
                </p>
              </div>
            </div>
            <div className="info-body">
              <img
                className="info-logo"
                src={"images/icons8-ok-50.png"}
                alt={"no image"}
              />
              <div className="info-text">
                <h3>Less Limits In The Life</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae hic officia iste ipsa, rerum reiciendis sequi harum
                  esse dolorum dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Part Finishes */}
      {/* SignUP Part Starts */}
      <div className="SignUp">
        <div className="SignUpBar">
          <img
            className="info-logo"
            src={"images/icons8-mail-50.png"}
            alt={"no image"}
          />
          <div>
            <p>
              SIGNUP TODAY <br />
              for the Latest News, Promotional Offers and Exclusive Discounts
            </p>
          </div>
          <input type="email" placeholder="your email address" />
          <input type="button" value={"SignUp"} />
        </div>
      </div>

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
            <h2
              style={{
                color: "#ff4d00",
                fontSize: "40px",
                paddingBottom: "20px",
              }}
            >
              GAIN MASS
            </h2>
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
            <h2
              style={{
                color: "#ff4d00",
                fontSize: "40px",
                paddingBottom: "20px",
              }}
            >
              LOSE WEIGHT
            </h2>
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
          <p>Beginner Exercises</p>
          <NavLink
            to="Exercises"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "loginInactiveStyle"
            }
          >
            Begin Now!
          </NavLink>
        </div>
        <div className="option2">
          <p>Advanced Exercises</p>
          <NavLink
            to="Exercises"
            className={({ isActive }) =>
              isActive ? "activeStyle" : "loginInactiveStyle"
            }
          >
            Begin Now!
          </NavLink>
        </div>
      </div>

      {/* Content 3 */}
    </section>
  );
}

export default Home;
