import React, {useEffect, useState} from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import "./menu.css"
import {motion as m} from 'framer-motion'
import logoLight from "../logo_light.png"
// import menuItems from "./menu_items"
import {db} from "../firebase"
import { collection, getDocs } from 'firebase/firestore'
import FilterBar from './filter/FilterBar'


const getFilteredItems = (query, menuItems) => {
  if(!query){
    return menuItems
  }
  else{  
    return menuItems.filter((menuItem) => menuItem.name.toLowerCase().includes(query.toLowerCase()))
  }
}

const Menu = () => {

  const [menuItems, setMenuItems] = useState([])
  const menuItemsRef = collection(db, "menu-items")

  useEffect(() => {
    const getMenuItems = async () => {
      const data = await getDocs(menuItemsRef)
      setMenuItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getMenuItems()
  })

  const [query, setQuery] = useState('')

  const filteredItems = getFilteredItems(query, menuItems)

  const generateCusineDataForDropdown = () => {
    return [...new Set(filteredItems.map((itemDetail) => itemDetail.cusine))]
  }


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
      <div className="search-bar-container">
        <label htmlFor="">Search</label>
        <input type="text" onChange={e => setQuery(e.target.value)}/>
      </div>
      <div className="menu-page-main">
        <FilterBar cusines={generateCusineDataForDropdown()}/>
        <div className="cusine">
          <div className="menu-cards">
            {filteredItems.map((itemDetail, index) => {
              return (
              <div className="menu-card">
                <h1 className="cusine-tag">{itemDetail.cusine}</h1>
                <div className="food-image-container" style={{"backgroundImage": `url(${itemDetail.image})`}}>
                  {/* <img src={itemDetail.image} alt={itemDetail.name} className="food-image" /> */}
                </div>
                <div className="menu-text">
                  <div className="menu-text-top">
                    <div className="menu-text-top-heading-price">
                      <h3 className="menu-text-top-heading" key={itemDetail.name}>{itemDetail.name}</h3>
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
            )})
            }
          </div>
        </div>
      </div>
      <Footer />
    </m.div>
  )
}

export default Menu