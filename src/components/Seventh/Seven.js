import React from "react";
import NavLink from "react-router-dom";
import "./Seven.css";

const Seven = () => {
  return (
    <>
      <div className="seven_background">
        <div className="seven_content">
          <div className="seven_content_one">
            <h2>
              Let's make something
              <br />
              amazing together
            </h2>
            <h3>
              Start by{" "}
              <a href="mailto:uk03777@gmail.com">
                <span className="hi">saying hi!</span>
              </a>
            </h3>
          </div>
          <div className="seven_content_two">
            <h4>Information</h4>
            <div className="information_subheadings">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </div>
          </div>
          </div>
          <div className="seven_content_second_first">

          <div className="seven_content_second">
            <div className="logo_footer">
              <span>Usman</span>
              <text>@2022. All Rights Reserved</text>
            </div>
            <div className="logo_footer_two">
              <h3>
                Designed by{" "}
                <span>
                  <a href="mailto:uk03777@gmail.com">Usman</a>
                </span>
              </h3>
            </div>
        </div>
          </div>
      </div>
    </>
  );
};

export default Seven;
