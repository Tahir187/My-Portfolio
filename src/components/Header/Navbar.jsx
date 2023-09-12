import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon  from "../../assets/menu.svg";

import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
         <a href="#home"> <h6>M.<span>Tahir</span></h6> </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={MenuIcon} alt="hamburger-icon" style={{width:"50px"}} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
