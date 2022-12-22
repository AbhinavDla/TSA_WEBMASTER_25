import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import "./menu.css"
import {motion as m} from 'framer-motion'
import logoLight from "../logo_light.png"
import menuItems from "./menu_items.json"

const Menu = () => {
  return (
    <m.div
      initial={{opacity: 0.5}} 
      animate={{opacity: 1}}
      transition={{duration: 0.95, ease: 'easeOut'}}
      exit={{opacity: 1}}
    >
      <div className="background-hero" id="menu-background">
        <Navbar 
          logo={logoLight}
          color="white"
          navLinkColor="white"
        />
        <m.div 
          className="background-hero-text"
          animate={{x: 0}}
          initial={{x: '-100%'}}
          transition={{duration: 0.85, ease: 'easeOut'}}
          exit={{opacity: 1}}
        >
          <h1 className="background-hero-heading">Fast, Tasty, and Always Fresh</h1>
          <p className="background-hero-description">
            We have food options from almost any cusine you can think of
          </p>
        </m.div>
      </div>
      <div className="menu-page-main">
        <div className="cusine">
          <div className="section-header-container">
            <m.h2 
              className="section-header"
              animate={{x: 0}}
              initial={{x: '-600%'}}
              transition={{duration: 0.85, ease: 'easeOut'}}
              exit={{opacity: 1}}
            >Thai</m.h2>
          </div>
          <div className="menu-cards">
            
            {menuItems.map((itemDetail, index) => {
              return (
              <div className="menu-card">
                <div className="food-image-container" style={{"backgroundImage": `url(${itemDetail.image})`}}>
                  {/* <img src={itemDetail.image} alt={itemDetail.name} className="food-image" /> */}
                </div>
                <div className="menu-text">
                  <div className="menu-text-top">
                    <div className="menu-text-top-heading-price">
                      <h3 className="menu-text-top-heading">{itemDetail.name}</h3>
                      <p className="menu-text-top-price">${itemDetail.price}</p>
                    </div>
                    <p className="food-description">{itemDetail.description}</p>
                  </div>
                  <div className="menu-text-bottom">
                    <p className="calories">{itemDetail.calories} CAL</p>
                    <p className="dietary-restrictions">{itemDetail.restrictions}</p>
                  </div>
                </div>
              </div>
            )
            })}
            
          </div>
        </div>
        <div className="cusine">
          <div className="section-header-container">
            <h2 className="section-header">Mexican</h2>
          </div>
          <div className="menu-cards">
            
          </div>
        </div>
      </div>
      <Footer />
    </m.div>
  )
}

export default Menu