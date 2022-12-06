import React from 'react'
import "./navbar.css"
import Logo from './green_spoon_logo.png'
import {Link} from 'react-router-dom'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useRef} from 'react'

const Navbar = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  return (
    <nav className="nav">
        <div className="logo-container">
            <Link to="/"><a href="/" className="logo-container-link">
                <img src={Logo} alt="" className="logo-img"/>
                <div className="logo-text">
                    <h2 className="logo-header">The Green Spoon</h2>
                    <p className="logo-description">Vegan Foods • Meaty Flavors</p>
                </div>
            </a></Link>
        </div>
        <ul className="nav-link-container" ref={navRef}>
            <li className="nav-item"><Link to="/"><a href="">Home</a></Link></li>
            <li className="nav-item"><Link to="/menu"><a href="">Menu</a></Link></li>
            <li className="nav-item"><Link to="/reservations"><a href="">Reservations</a></Link></li>
            <li className="nav-item"><Link to="/contact"><a href="">Contact</a></Link></li>
            <button onClick={showNavbar} className="hamburger nav-close-button">
                <FaTimes />
            </button>
        </ul>
        <button onClick={showNavbar} className="hamburger">
            <FaBars />
        </button>
    </nav>  
   ) 
}


export default Navbar