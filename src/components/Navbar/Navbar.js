import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar_background">

        <nav>
            <div className="logo">
              <p>Usman</p>
            </div>
            <div className="headings">
             <ul>
               <li>Services</li>
               <li>Work</li>
               <li>Experience</li>
             </ul>
            </div>
            <div className="contact_us">
              <button>Email   me <i class="fa fa-inbox" aria-hidden="true"></i></button>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar