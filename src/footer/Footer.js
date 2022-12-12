import React from 'react'
import "./footer.css"
import Map from "./map.png"

const Footer = () => {
  return (
    <footer>
        {/* <div class="description-and-logo">
            <div class="logo-container footer-logo-container">
                <a href="/">
                    <i class="fa-solid fa-rocket logo-img footer-logo-img"></i>
                    <h2 class="logo-text footer-logo-text">Race2Space</h2>
                </a>
            </div>
            <p class="footer-description">
                Race2Space is the world’s first space tourism company. We take you into the deep depths of space and let anyone become an astronaut without breaking the bank.  
            </p>
        </div> */}
        <div class="hours-section">
            <h2 class="footer-header">Hours</h2>
            <ul class="hours">
                <li class="hours-list-item"><b>Sunday</b>: 9 - 10am</li>
                <li class="hours-list-item"><b>Monday</b>: 9 - 10am</li>
                <li class="hours-list-item"><b>Tuesday</b>: 9 - 10am</li>
                <li class="hours-list-item"><b>Wednesday</b>: 9 - 10am</li>
                <li class="hours-list-item"><b>Thursday</b>: 9 - 10am</li>
                <li class="hours-list-item"><b>Friday</b>: 9 - 10am</li>
                <li class="hours-list-item"><b>Saturday</b>: 9 - 10am</li>
            </ul>
        </div>
        <div class="site-links-section">
            <h2 class="footer-header">Site Links</h2>
            <ul class="site-links">
                <li class="nav-item"><a href="index.html">Home</a></li>
                <li class="nav-item"><a href="about.html">Menu</a></li>
                <li class="nav-item"><a href="trips.html">Reservations</a></li>
                <li class="nav-item"><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="contact-info">
            <h2 class="footer-header">Contact</h2>
            <div class="contact-method " id="contact-method-first">
                <h3 class="contact-method-heading">Email</h3>
                <p class="contact-method-description"><a href="">thegreenspoon@gmail.com</a></p>
            </div>
            <div class="contact-method">
                <h3 class="contact-method-heading">Phone Number</h3>
                <p class="contact-method-description"><a href="">425-123-4567</a></p>
            </div>
            <div class="contact-method">
                <h3 class="contact-method-heading">Social Media</h3>
                <div class="social-media-container">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-tiktok"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                    <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-map">
            <img src={Map} alt="" />
        </div>
    </footer>
  )
}

export default Footer