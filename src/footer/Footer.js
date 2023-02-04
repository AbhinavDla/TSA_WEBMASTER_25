import React from 'react'
import "./footer.css"
import Map from "./map.png"
import {Link} from 'react-router-dom'
import facebookLogo from './facebook_logo.png'
import instagramLogo from './instagram_logo.png'
import tiktokLogo from './tiktok_logo.png'
import twitterLogo from './twitter_logo.png'
import youtubeLogo from './youtube_logo.png'
import yelpLogo from './yelp_logo.png'

const Footer = () => {
  return (
    <>
    <footer>
        <div class="hours-section">
            <h2 class="footer-header">Hours</h2>
            <ul class="hours">
                <li class="hours-list-item"><b>Sunday</b>: 9 - 10pm</li>
                <li class="hours-list-item"><b>Monday</b>: 9 - 10pm</li>
                <li class="hours-list-item"><b>Tuesday</b>: 9 - 10pm</li>
                <li class="hours-list-item"><b>Wednesday</b>: 9 - 10pm</li>
                <li class="hours-list-item"><b>Thursday</b>: 9 - 10pm</li>
                <li class="hours-list-item"><b>Friday</b>: 9 - 10pm</li>
                <li class="hours-list-item"><b>Saturday</b>: 9 - 10pm</li>
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
                <p class="contact-method-description"><a href="mailto:greenspoonservices@gmail.com">greenspoonservices@gmail.com</a></p>
            </div>
            <div class="contact-method">
                <h3 class="contact-method-heading">Phone Number</h3>
                <p class="contact-method-description"><a href="tel:123-456-7890">425-553-8188</a></p>
            </div>
            <div class="contact-method">
                <h3 class="contact-method-heading">Social Media</h3>
                <div class="social-media-container">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100090091532986"><img src={facebookLogo} alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/_thegreenspoon_/"><img src={instagramLogo} alt=""/></a>
                    <a target="_blank" href="https://www.tiktok.com/@_thegreenspoon_?lang=en"><img src={tiktokLogo} alt="" /></a>
                    <a target="_blank" href="https://twitter.com/_TheGreenSpoon_"><img src={twitterLogo} alt="" /></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UC1M35IKr3Rj0zymx-AEeaAw"><img src={youtubeLogo} alt="" /></a>
                    <a target="_blank" href="https://biz.yelp.com/biz_info/ip-kKyB8jQmYGavOEKvLiQ"><img src={yelpLogo} alt="" /></a>
                </div>
            </div>
        </div>
        <a class="footer-map" target="_blank" href="https://www.google.com/maps/dir/47.8243418,-122.1829609/Space+Needle,+400+Broad+St,+Seattle,+WA+98109/@47.7323843,-122.4114577,11z/data=!3m1!4b1!4m17!1m7!3m6!1s0x5490151f4ed5b7f9:0xdb2ba8689ed0920d!2sSpace+Needle!8m2!3d47.6205063!4d-122.3492774!16zL20vMDFrN3Y3!4m8!1m1!4e1!1m5!1m1!1s0x5490151f4ed5b7f9:0xdb2ba8689ed0920d!2m2!1d-122.3492774!2d47.6205063">
            <img src={Map} alt="" />
        </a>
    </footer>
    <div className="credits">
        <p>Saakshith Chikoti, Veer Jain, Vedant Lad</p>
        <p className="copyright">&copy;The Green Spoon 2023</p>
    </div>
    </>
  )
}


export default Footer;