import React, {useState} from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { FaClock, FaCalendar, FaUser } from 'react-icons/fa'
import "./reservations.css"
import {motion as m} from 'framer-motion'
import emailjs from 'emailjs-com'
import logoLight from "../logo_light.png"

const Reservations = () => {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_hjwh2ab',
      'template_6ldggcl',
      e.target,
      'cZk41Gfy4pVa8D0tE'
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    setDate("")
    setTime("")
    setGuests("")
  }

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
            <h1 className="background-hero-heading">Make A Reservation</h1>
          </m.div>
        </div>
        <section className="online-reservation">
          <div className="section-header-container">
            <m.h2 
              className="section-header"
              animate={{x: 0}}
              initial={{x: '-600%'}}
              transition={{duration: 0.85, ease: 'easeOut'}}
              exit={{opacity: 1}}
            >Make A Reservation</m.h2>
          </div>
          <form action="" name="reservations" className="reservation-form" onSubmit={sendEmail}>
            <div className="reservation-filters-container">
                <div className="reservation-filter">
                  <FaCalendar className="filter-icon"/>
                  <input type="date" name="date" id="" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="reservation-filter">
                  <FaClock className="filter-icon"/>
                  <input type="time" name="time" id="" value={time} onChange={(e) => setTime(e.target.value)}/>
                </div>
                <div className="reservation-filter">
                  <FaUser className="filter-icon"/>
                  <input type="number" name="guests" id="" value={guests} onChange={(e) => setGuests(e.target.value)}/>
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
    </m.div>
  )
}

export default Reservations