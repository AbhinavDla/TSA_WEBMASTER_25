import React, {useState} from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { FaClock, FaCalendar, FaUser } from 'react-icons/fa'
import "./reservations.css"
import {motion as m} from 'framer-motion'
import emailjs from 'emailjs-com'
import logoLight from "../logo_light.png"
import {db} from "../firebase"
import { collection, addDoc } from 'firebase/firestore'

const Reservations = () => {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const createReservation = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, 'reservations'), {
      email: email,
      phone: `+1 ${phone}`,
      guests: guests,
      name: name,
      time: [
        date,
        time
      ]
    })

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
    setName("")
    setEmail("")

    window.alert("Thank you for submitting a reservation! You will recieve an email confirmation shortly")
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
            >Make An Online Reservation</m.h2>
          </div>
          <form action="" name="reservations" className="reservation-form" onSubmit={createReservation}>
            <div className="reservation-info-container">
              <div className="">
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="">
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" placeholder="example123@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="">
              <label htmlFor="">Phone Number</label>
                <input  type="tel" name="phone" id="" placeholder='123 456 7890' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
              </div>
             
            </div>
            <div className="reservation-filters-container">
                <div className="reservation-filter">
                  <FaCalendar className="filter-icon"/>
                  <input type="date" name="date" id="" value={date} onChange={(e) => setDate(e.target.value)}  min='2023-02-01'/>
                </div>
                <div className="reservation-filter">
                  <FaClock className="filter-icon"/>
                  <input type="time" name="time" id="" value={time} onChange={(e) => setTime(e.target.value)} min="09:00" max="22:00"/>
                </div>
                <div className="reservation-filter">
                  <FaUser className="filter-icon"/>
                  <input type="number" name="guests" id="" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="20" />
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
                We take reservations for any available time between 9AM and 10PM. Tables will be marked as reserved during the time of reservation based on guests. Choice of seating area cannot be promised. Call us at (425)-553-8188 to book a table now.
              </p>
            </div>
          </div>
          <div className="other-reservation-container">
            <div className="section-header-container" id="other-reservation-section-header">
              <h2 className="section-header">Private Reservations</h2>
            </div>
            <div className="other-reservation-description-container">
              <p className="other-reservation-description">
                We take reservations for any available time between 9AM and 10PM. You must call ahead so food can be catered and the party hall can be blocked off from guests. We can accompany up to 150 guests per party. Call us at (425)-553-8188 to reserve a private party. 
              </p>
            </div>
          </div>
        </section>
        <Footer />
    </m.div>
  )
}

export default Reservations
