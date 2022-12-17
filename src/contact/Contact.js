import React from 'react'
import Navbar from "../navbar/Navbar"
import "./contact.css"
import Footer from "../footer/Footer"

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className="section-header-container" id="contact-section-header-container">
          <h2 className="section-header">Do You Have Any Questions?</h2>
          <p>Dont be a stranger, contact us directly with any questions or concerns :)</p>
        </div>
        <section className="contact-form-container">
          <form action="" className="contact-form">
            <div className="firstname-lastname contact-form-section">
              <div className="form-input">
                <label htmlFor="" className="form-input-label">First Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-input form-input-right">
                <label htmlFor="" className="form-input-label">Last Name</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="phone-number-email contact-form-section">
              <div className="form-input">
                <label htmlFor="" className="form-input-label">Phone Number</label>
                <input type="number" name="" id="" />
              </div>
              <div className="form-input form-input-right">
                <label htmlFor="" className="form-input-label">Email</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="message form-input">
              <label htmlFor="" className="form-input-label">Message</label>
              <textarea className="message-textarea" name="" id="" rows="10"></textarea>
            </div>
            <button className="send-btn">Send Message</button>
          </form>
        </section>
        <Footer />
    </div>
  )
}

export default Contact