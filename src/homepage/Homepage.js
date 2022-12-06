import React from 'react'
import Navbar from "../navbar/Navbar"
import heroImage from "./hero_img.png"
import "./homepage.css"

const homepage = () => {
  return (
    <div className="homepage">
        <div className="green-thing"></div>
        <Navbar />
        <div className="hero">
          <div className="hero-left">
            <h1 className="hero-header">Vegan Foods, Meaty Flavors</h1>
            <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing eli1, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <div className="hero-button-container">
              <button className="hero-main-button">Make A Reservation</button>
              <button className="hero-secondary-button">View Menu</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="" className="hero-img" />
          </div>
        </div>
    </div>
  )
}

export default homepage