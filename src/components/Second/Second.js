import React from "react";
import "./Second.css";
import websites from "../../assets/images/Websites.png";
import design from "../../assets/images/design.png";
import apps from "../../assets/images/apps.png";

const Second = () => {
  return (
    <>
    <div id="services" className="second_background">

      <section className="second-part">
        <div className="second-section">
        {/* Second section right portion */}
          <div className="second-section-right">
            <div className="section-second-right-first">
              <img src={websites} alt="" />
              <h3>Responsive Websites</h3>
            </div>
            <div className="section-second-right-second">
              <img src={apps} alt="" />
              <h3>Mobile Apps</h3>
            </div>
            <div className="section-second-right-third">
              <img src={design} alt="" />
              <h3>Web Design</h3>
            </div>
          </div>
        {/* Second section left portion */}
          <div className="second-section-left">
            <div className="section-second-left-first">
              <h2>How do I help?</h2>
            </div>
            <div className="section-second-left-second">
              <p>
                I will help you make the design <br /> and then developing that design <br />
                into an actual website
              </p>
            </div>
            <div className="section-second-left-third">
              <div className="section-second-left-third-one">
                <span>100+</span>
                <p>Projects Completed</p>
              </div>
              <div className="section-second-left-third-two">
                <span>50+</span>
                <p>Clients Satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Second;
