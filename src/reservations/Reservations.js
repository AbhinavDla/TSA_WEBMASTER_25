import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { FaClock, FaCalendar, FaUser } from 'react-icons/fa'
import "./reservations.css"

const Reservations = () => {
  return (
    <div>
        <div className="background-hero">
          <Navbar />
          <div className="background-hero-text">
            <h1 className="background-hero-heading">Make A Reservation</h1>
          </div>
        </div>
        <section className="online-reservation">
          <div className="section-header-container">
            <h2 className="section-header">Make A Reservation</h2>
          </div>
          <form action="" className="reservation-form" method="post" onSubmit="submit" data-netlify="true" netlify>
            <div className="reservation-filters-container">
                <div className="reservation-filter">
                  <FaCalendar className="filter-icon"/>
                  <input type="date" name="" id="" />
                </div>
                <div className="reservation-filter">
                  <FaClock className="filter-icon"/>
                  <input type="time" name="" id="" />
                </div>
                <div className="reservation-filter">
                  <FaUser className="filter-icon"/>
                  <input type="number" name="" id="" value="2"/>
                </div>
            </div>
            <button className="reservations-btn" type="submit">Make A Reservation</button>
          </form>
        </section>
        <Footer />
    </div>
  )
}

export default Reservations