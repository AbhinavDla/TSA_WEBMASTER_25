import './App.css';
import React, {useState, useEffect} from 'react'
import Navbar from './navbar/Navbar'
import Homepage from './homepage/Homepage'
import Menu from './menu/Menu'
import Reservations from './reservations/Reservations'
import Contact from './contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {motion as m} from 'framer-motion'
import { AnimatePresence } from 'framer-motion';
// import ClipLoader from 'react-spinners/clip-loader'
import ScrollToTop from "./ScrollToTop"

function App() {
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 8000)
  // }, [])

  return (
    <BrowserRouter>
      <AnimatePresence mode={"wait"}>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Homepage key={Route.pathname}/>}/>
            <Route path="/menu" element={<Menu key={Route.pathname}/>}/>
            <Route path="/reservations" element={<Reservations key={Route.pathname}/>}/>
            <Route path="/contact" element={<Contact key={Route.pathname}/>}/>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
