import React from 'react'
import "./navbar.css"
import Logo from './green_spoon_logo.png'

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="logo-container">
            <a href="/" className="logo-container-link">
                <img src={Logo} alt="" className="logo-img"/>
                <div className="logo-text">
                    <h2 className="logo-header">The Green Spoon</h2>
                    <p className="logo-description">Vegan Foods • Meaty Flavors</p>
                </div>
            </a>
        </div>
        <ul className="nav-link-container">
            <li className="nav-item"><a href="">Home</a></li>
            <li className="nav-item"><a href="">Menu</a></li>
            <li className="nav-item"><a href="">Reservations</a></li>
            <li className="nav-item"><a href="">Contact</a></li>
        </ul>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </nav>  
   ) 
}


export default Navbar