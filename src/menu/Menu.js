import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import Food from "./food.png"
import "./menu.css"

const Menu = () => {
  return (
    <>
        <div className="background-hero">
          <Navbar />
          <div className="background-hero-text">
            <h1 className="background-hero-heading">Fast, Tasty, and Always Fresh</h1>
            <p className="background-hero-description">
              We have food options from almost any cusine you can think of
            </p>
          </div>
        </div>
        <div className="menu-main">
          <div className="cusine">
            <div className="section-header-container">
              <h2 className="section-header">Italian</h2>
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
    </>
  )
}

export default Menu