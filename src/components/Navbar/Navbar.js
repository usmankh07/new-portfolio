import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "../../assets/images/Hamburger.png";
import Cross from "../../assets/images/cross.png";

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  const showMenu = () => {
    const open_button = document.querySelector(".headings_mobile");
    open_button.style.left = "0%";
  };
  const closeMenu = () => {
    const cross_button = document.querySelector(".headings_mobile");
    cross_button.style.left = "-100%";
  };

  return (
    <>
      <div id="home" className="navbar_background">
        <nav>
          <div className="first_nav">
            <div className="logo">
              <a href="#home">
                <p>Usman</p>
              </a>
            </div>
            <div className="mobile_menu">
              <img src={Hamburger} onClick={showMenu} alt="" />
            </div>
            <div className="headings">
              <ul>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
              </ul>
            </div>
            <div className="contact_us">
              <a href="mailto:uk03777@gmail.com">
                <button>
                  Email me <i class="fa fa-inbox" aria-hidden="true"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="headings_mobile">
            <div className="headings_mobile_logo">
              <p>Usman</p>
              <img src={Cross} alt="" onClick={closeMenu} />
            </div>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
            </ul>
            <div className="contact_us_mobile">
              <button>
                Email me <i class="fa fa-inbox" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
