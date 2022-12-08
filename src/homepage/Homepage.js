import React from 'react'
import Navbar from "../navbar/Navbar"
import heroImage from "./hero_img.png"
import "./homepage.css"
import ourStoryImage1 from "./our_story_image_1.jpg"
import edibleSpoon from "./edible_spoon.jpg"

const homepage = () => {
  return (
    <>
    <section className="homepage">
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
    </section>
    <section className="our-story">
      <div className="our-story-left">
        <img src={ourStoryImage1} alt="" className="our-story-img1" />
        <img src={edibleSpoon} alt="" className="our-story-img2" />
      </div>
      <div className="our-story-right">
        <div className="section-header-container" id="our-story-header">
          <h2 className="section-header">Our Story</h2>
        </div>
        <div className="our-story-text-container">
          <p className="our-story-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default homepage