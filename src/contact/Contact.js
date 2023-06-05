import React, {useState} from 'react'
import Navbar from "../navbar/Navbar"
import "./contact.css"
import Footer from "../footer/Footer"
import {motion as m} from 'framer-motion'
import emailjs from 'emailjs-com'
import logoDark from "../green_spoon_logo.png"
import { useMediaQuery } from 'react-responsive';
import {db} from "../firebase"
import { collection, addDoc } from 'firebase/firestore'
import Iframe from "react-iframe"

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [checked, setChecked] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, 'contacts'), {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: `+1 ${phoneNumber}`,
      message: message,
      subscribed: checked
    })

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
    setChecked(true)

    window.alert("Thank you for messaging us! We will respond to you soon!")
  }

  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` });

  return (
    // <m.div
    //   initial={{opacity: 0.5}} 
    //   animate={{opacity: 1}}
    //   transition={{duration: 0.95, ease: 'easeOut'}}
    //   exit={{opacity: 1}}
    // >    
    //     {isMobile ?
    //       <Navbar 
    //         logo={logoDark}
    //         color="black"
    //         navLinkColor="black"
    //       />
    //       :
    //       <Navbar 
    //         logo={logoDark}
    //         color="black"
    //         navLinkColor="white"
    //       />
    //     }
        
    //     <m.div 
    //       className="section-header-container" 
    //       id="contact-section-header-container"
    //       animate={{x: 0}}
    //       initial={{x: '-100%'}}
    //       transition={{duration: 0.85, ease: 'easeOut'}}
    //       exit={{opacity: 1}}
    //     >
    //       <h2 className="section-header">Questions or Concerns?</h2>
    //       <p className="section-header-description-contact">Dont be a stranger, contact us directly with any questions or concerns :) Contact us if you have any feedback, questions or comments on the restaurant or the website itself, we promise to reply within a day.</p>
    //     </m.div>
    //     <section className="contact-form-container">
    //       <m.form 
    //         action="" 
    //         onSubmit={handleSubmit}
    //         className="contact-form"
    //         animate={{x: 0}}
    //         initial={{x: '-100%'}}
    //         transition={{duration: 0.85, ease: 'easeOut'}}
    //         exit={{opacity: 1}}
    //       >
    //         <div className="firstname-lastname contact-form-section">
    //           <div className="form-input">
    //             <label htmlFor="" className="form-input-label">First Name</label>
    //             <input type="text" name="first-name" placeholder="John" id="" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
    //           </div>
    //           <div className="form-input form-input-right">
    //             <label htmlFor="" className="form-input-label">Last Name</label>
    //             <input type="text" name="last-name" id="" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    //           </div>
    //         </div>
    //         <div className="phone-number-email contact-form-section">
    //           <div className="form-input">
    //             <label htmlFor="" className="form-input-label">Phone Number</label>
    //             <input type="number" name="phone-number" id="" placeholder="4251234567" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
    //           </div>
    //           <div className="form-input form-input-right">
    //             <label htmlFor="" className="form-input-label">Email</label>
    //             <input type="text" name="email" id="" placeholder="johndoe@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
    //           </div>
    //         </div>
    //         <div className="message form-input">
    //           <label htmlFor="" className="form-input-label">Message</label>
    //           <textarea className="message-textarea" name="message" id="" rows="10" placeholder="Hey, what's up" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    //         </div>
    //         <div className="checkbox-container">
    //           <input type="checkbox" name="checkbox" id="" value={checked} onChange={(e) => setChecked(e.target.value)}/>
    //           <label htmlFor="" className="checkbox-label">Subscribe to recieve announcments about new seasonal menus, offers, and more</label>
    //         </div>
    //         <button className="send-btn" type="submit">Send Message</button>
    //       </m.form>
    //     </section>
    //     <Footer />
    // </m.div>
    <div>
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
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form-container">
            <h3>Questions or Concerns?</h3>
            <p>Dont be a stranger, contact us if you have any feedback, questions or comments on the restaurant, the website itself, or just to say hello, we promise to reply within a day!</p>
            <form action="" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-input">
                <label htmlFor="" className="form-input-label">First Name</label>
                <input type="text" name="first-name" placeholder="John" id="" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="form-input">
                <label htmlFor="" className="form-input-label">Last Name</label>
                <input type="text" name="last-name" id="" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className="form-input">
                <label htmlFor="" className="form-input-label">Phone Number</label>
                <input type="number" name="phone-number" id="" placeholder="4251234567" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
              </div>
              <div className="form-input">
                <label htmlFor="" className="form-input-label">Email</label>
                <input type="text" name="email" id="" placeholder="johndoe@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="message form-input">
                <label htmlFor="" className="form-input-label">Message</label>
                <textarea className="message-textarea" name="message" id="" rows="10" placeholder="Hey, what's up" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" name="checkbox" id="" value={checked} onChange={(e) => setChecked(e.target.value)}/>
                <label htmlFor="" className="checkbox-label">Subscribe to recieve announcments about new seasonal menus, offers, and more</label>
              </div>
              <button className="send-btn" type="submit">Send Message</button>
            </form>
          </div>
          <div className="map-container">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2893592743762!2d-122.35146608442545!3d47.62050627918556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1677021274282!5m2!1sen!2sus" title="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact