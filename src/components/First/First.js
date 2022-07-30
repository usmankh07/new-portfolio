import React from "react";
import First_Image from "../../assets/images/background_2.png";
import w3 from "../../assets/images/w3.png";
import "./First.css";

const First = () => {
  return (
    <>
    <div className="first_background">

      <main>
        <div className="first">
          <div className="first_title">
            Hey There, <br />
            I'm Usman
          </div>
          <div className="first_paragraph">
            I code beautiful websites. And I <br />
            love what I do
          </div>
        </div>
        <div className="second_portion">
          <div className="second">
            <div className="second_title">1</div>
            <div className="second_title_2">
              Year Of
              <br />
              Experience
            </div>
          </div>
          <div className="second_image">
            <img src={First_Image} alt="" />
          </div>
          <div className="second_last">
            <div className="w3">
              <img src={w3} alt="" />
            </div>
            <div className="w3_title">
              W3 Certified
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default First;
