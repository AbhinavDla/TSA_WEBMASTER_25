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
          <form action="" name="reservations" className="reservation-form" method="post" onSubmit="submit" data-netlify="true">
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
        <section className="other-reservation">
          <div className="other-reservation-container">
            <div className="section-header-container" id="other-reservation-section-header">
              <h2 className="section-header">Reserve By Phone</h2>
            </div>
            <div className="other-reservation-description-container">
              <p className="other-reservation-description">
                We take reservations for any available time between 9AM and 10PM. Tables will be marked as reserved during the time of reservation based on guests. Choice of seating area cannot be promised. Call us at (425)-123-4567 to book a table now.
              </p>
            </div>
          </div>
          <div className="other-reservation-container">
            <div className="section-header-container" id="other-reservation-section-header">
              <h2 className="section-header">Private Reservations</h2>
            </div>
            <div className="other-reservation-description-container">
              <p className="other-reservation-description">
                We take reservations for any available time between 9AM and 10PM. You must call ahead so food can be catered and the party hall can be blocked off from guests. We can accompany up to 150 guests per party. Call us at (425)-123-4567 to reserve a private party. 
              </p>
            </div>
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Reservations