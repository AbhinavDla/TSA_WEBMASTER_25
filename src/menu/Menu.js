import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Food from "./images/food.png"
import "./menu.css"
import {motion as m} from 'framer-motion'
import Tort from "./images/Tort.png"
import logoLight from "../logo_light.png"
import logoDark from "../green_spoon_logo.png"

const Menu = () => {
  return (
    <m.div
      initial={{opacity: 0.5}} 
      animate={{opacity: 1}}
      transition={{duration: 0.95, ease: 'easeOut'}}
      exit={{opacity: 1}}
    >
      <div className="background-hero">
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
            >Italian</m.h2>
          </div>
          <div className="menu-cards">
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="Tortellini Picture" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cusine">
          <div className="section-header-container">
            <h2 className="section-header">Mexican</h2>
          </div>
          <div className="menu-cards">
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="food-image-container">
                <img src={Food} alt="" className="food-image" />
              </div>
              <div className="menu-text">
                <div className="menu-text-top">
                  <div className="menu-text-top-heading-price">
                    <h3 className="menu-text-top-heading">Customized Pasta</h3>
                    <p className="menu-text-top-price">$14.99</p>
                  </div>
                  <p className="food-description">This pasta can be customized fully, the type of pasta (angel hair, spaghetti, linguine, rigatoni). You can also choose between sauces (red sauce, white sauce, pink sauce, pesto). You can also choose the type of vegan meat (veggies, beef, chicken, pork, turkey)</p>
                </div>
                <div className="menu-text-bottom">
                  <p className="calories">1000 - 1500 CAL</p>
                  <p className="dietary-restrictions">GF DF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </m.div>
  )
}

export default Menu