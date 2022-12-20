import React from 'react'
import "./footer.css"
import Map from "./map.png"
import {Link} from 'react-router-dom'
import facebookLogo from './facebook_logo.png'
import instagramLogo from './instagram_logo.png'
import tiktokLogo from './tiktok_logo.png'
import twitterLogo from './twitter_logo.png'
import youtubeLogo from './youtube_logo.png'

const Footer = () => {
  return (
    <>
    <footer>
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
                <li class="nav-item"><Link to="/"><a>Home</a></Link></li>
                <li class="nav-item"><Link to="/menu"><a>Menu</a></Link></li>
                <li class="nav-item"><Link to="/reservations"><a>Reservations</a></Link></li>
                <li class="nav-item"><Link to="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
        <div class="contact-info">
            <h2 class="footer-header">Contact</h2>
            <div class="contact-method " id="contact-method-first">
                <h3 class="contact-method-heading">Email</h3>
                <p class="contact-method-description"><a href="mailto:thegreenspoon@gmail.com">thegreenspoon@gmail.com</a></p>
            </div>
            <div class="contact-method">
                <h3 class="contact-method-heading">Phone Number</h3>
                <p class="contact-method-description"><a href="tel:123-456-7890">425-123-4567</a></p>
            </div>
            <div class="contact-method">
                <h3 class="contact-method-heading">Social Media</h3>
                <div class="social-media-container">
                    <a href="https://facebook.com/thegreenspoon"><img src={facebookLogo} alt="" /></a>
                    <a href="https://instagram.com/thegreenspoon"><img src={instagramLogo} alt=""/></a>
                    <a href="https://tiktok.com/thegreenspoon"><img src={tiktokLogo} alt="" /></a>
                    <a href="https://twitter.com/thegreenspoon"><img src={twitterLogo} alt="" /></a>
                    <a href="https://youtube.com/thegreenspoon"><img src={youtubeLogo} alt="" /></a>
                </div>
            </div>
        </div>
        <div class="footer-map">
            <img src={Map} alt="" />
        </div>
    </footer>
    <div className="credits">
        <p>Saakshith Chikoti, Veer Jain, Vedant Lad</p>
        <p className="copyright">&copy;The Green Spoon 2023</p>
    </div>
    </>
  )
}

export default Footer