import React, {useState} from 'react'
import Navbar from "../navbar/Navbar"
import "./contact.css"
import Footer from "../footer/Footer"
import {motion as m} from 'framer-motion'
import emailjs from 'emailjs-com'
import logoDark from "../green_spoon_logo.png"
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_hjwh2ab',
      'template_iu6uvt6',
      e.target,
      'cZk41Gfy4pVa8D0tE'
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    setFirstName("")
    setLastName("")
    setEmail("")
    setPhoneNumber("")
    setMessage("")
  }

  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` });

  return (
    <m.div
      initial={{opacity: 0.5}} 
      animate={{opacity: 1}}
      transition={{duration: 0.95, ease: 'easeOut'}}
      exit={{opacity: 1}}
    >    
        {isMobile ?
          <Navbar 
            logo={logoDark}
            color="black"
            navLinkColor="black"
          />
          :
          <Navbar 
            logo={logoDark}
            color="black"
            navLinkColor="white"
          />
        }
        
        <m.div 
          className="section-header-container" 
          id="contact-section-header-container"
          animate={{x: 0}}
          initial={{x: '-100%'}}
          transition={{duration: 0.85, ease: 'easeOut'}}
          exit={{opacity: 1}}
        >
          <h2 className="section-header">Do You Have Any Questions?</h2>
          <p>Dont be a stranger, contact us directly with any questions or concerns :)</p>
        </m.div>
        <section className="contact-form-container">
          <m.form 
            action="" 
            onSubmit={handleSubmit}
            className="contact-form"
            animate={{x: 0}}
            initial={{x: '-100%'}}
            transition={{duration: 0.85, ease: 'easeOut'}}
            exit={{opacity: 1}}
          >
            <div className="firstname-lastname contact-form-section">
              <div className="form-input">
                <label htmlFor="" className="form-input-label">First Name</label>
                <input type="text" name="first-name" placeholder="John" id="" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="form-input form-input-right">
                <label htmlFor="" className="form-input-label">Last Name</label>
                <input type="text" name="last-name" id="" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
            </div>
            <div className="phone-number-email contact-form-section">
              <div className="form-input">
                <label htmlFor="" className="form-input-label">Phone Number</label>
                <input type="number" name="phone-number" id="" placeholder="4251234567" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
              </div>
              <div className="form-input form-input-right">
                <label htmlFor="" className="form-input-label">Email</label>
                <input type="text" name="email" id="" placeholder="johndoe@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="message form-input">
              <label htmlFor="" className="form-input-label">Message</label>
              <textarea className="message-textarea" name="message" id="" rows="10" placeholder="Hey, what's up" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button className="send-btn" type="submit">Send Message</button>
          </m.form>
        </section>
        <Footer />
    </m.div>
  )
}

export default Contact