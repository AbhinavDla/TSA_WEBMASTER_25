import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Reservations = () => {
  return (
    <div>
        <div className="background-hero">
          <Navbar />
          <div className="background-hero-text">
            <h1 className="background-hero-heading">Make A Reservation</h1>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Reservations