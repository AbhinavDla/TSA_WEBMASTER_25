import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./menu.css";
import { motion as m } from "framer-motion";
import logoLight from "../logo_light.png";
// import menuItems from "./menu_items"
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaFilter } from "react-icons/fa"
import FilterBar from "./filter/FilterBar";



const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const menuItemsRef = collection(db, "menu-items");
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  //const [allData, setData] = useState(filteredItems);

  useEffect(() => {
    const getMenuItems = async () => {
      const data = await getDocs(menuItemsRef);
      setMenuItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredMenuItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMenuItems();
  }, []);

  const [query, setQuery] = useState('')
  //const filteredItems = getFilteredItems(query, menuItems)

  const generateCusineDataForDropdown = () => {
    return [...new Set(menuItems.map((itemDetail) => itemDetail.cusine))];
  };



  // const handleFilterCusine = (cusine) => {
  //   const result = filteredItems.filter((item) => {
  //     return item.cusine === cusine
  //   })

  //   setMenuItems(result);
  // }
  const getFilteredItems = (query, menuItems) => {
    if (!query) {
      const filteredData = menuItems;
      setFilteredMenuItems(filteredData);
      return menuItems
    }
    else {
      const filteredData = menuItems.filter((menuItem) => menuItem.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredMenuItems(filteredData);
      return filteredData;
    }
  }
  const handleFilterName = (name) => {
    if (name !== '') {
      const filteredData = menuItems.filter((item) => {
        if (item.name.toLowerCase().includes(name.toLowerCase())) {
          return item.cusine === name;
        }
      })
      setFilteredMenuItems(filteredData);
    } else {
      setFilteredMenuItems(menuItems);
    }
  };

  const filterResult = (cusine) => {
    if (cusine !== '') {
      const result = menuItems.filter((item) => {
        return item.cusine === cusine;
      });
      setFilteredMenuItems(result);
    } else {
      setFilteredMenuItems(menuItems);
    }
  };

  return (
    <m.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.95, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="background-hero" id="menu-background">
        <Navbar logo={logoLight} color="white" navLinkColor="white" />
        <m.div
          className="background-hero-text"
          animate={{ x: 0 }}
          initial={{ x: "-100%" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <h1 className="background-hero-heading">
            Fast Tasty and Always Fresh
          </h1>
          <p className="background-hero-description">
            We have food options from almost any cusine you can think of
          </p>
        </m.div>
      </div>
      <div className="search-bar-container">
        <label htmlFor="">Search</label>
        <div className="search-bar-main">
          <input type="text" onChange={e => getFilteredItems(e.target.value, menuItems)} />
          <button><FaFilter /></button>
        </div>
      </div>
      <div className="menu-page-main">
        <FilterBar
          filterResult={filterResult}
          cusines={generateCusineDataForDropdown()}
          onNameFilter={handleFilterName}
        />
        <div className="cusine">
          <div className="menu-cards">
            {filteredMenuItems.map((item, index) => {
              return (
                <div className="menu-card">
                  <h1 className="cusine-tag">{item.cusine}</h1>
                  <div
                    className="food-image-container"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >

                  </div>
                  <div className="menu-text">
                    <div className="menu-text-top">
                      <div className="menu-text-top-heading-price">
                        <h3 className="menu-text-top-heading" key={item.name}>
                          {item.name}
                        </h3>
                        <p className="menu-text-top-price">${item.price}</p>
                      </div>
                      <p className="food-description">{item.description}</p>
                    </div>
                    <div className="menu-text-bottom">
                      <p className="calories">{item.calories} CAL</p>
                      <p className="dietary-restrictions">
                        {item.restrictions}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </m.div>
  );
};

export default Menu;