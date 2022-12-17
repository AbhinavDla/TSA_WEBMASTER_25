import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import heroImage from "./hero_img.png"
import "./homepage.css"
import ourStoryImage1 from "./our_story_image_1.jpg"
import edibleSpoon from "./edible_spoon.jpg"
import backgroundVideo from "./background_video.mp4"

const homepage = () => {
  return (
    <>
    <section className="homepage">
        {/* <div className="green-thing">
          
        </div> */}
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
        <Navbar />
        <div className="hero">
          <div className="hero-left">
            <h1 className="hero-header">Vegan Foods, Meaty Flavors</h1>
            <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing eli1, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <div className="hero-button-container">
              <button className="hero-main-button">Make A Reservation</button>
              <button className="hero-secondary-button">View Menu</button>
            </div>
          </div>
          <div className="hero-right">
            {/* <img src={heroImage} alt="" className="hero-img" /> */}
          </div>
        </div>
    </section>
    <section className="our-story">
      <div className="our-story-left">
        <img src={ourStoryImage1} alt="" className="our-story-img1" />
        <img src={edibleSpoon} alt="" className="our-story-img2" />
      </div>
      <div className="our-story-right">
        <div className="section-header-container" id="our-story-header">
          <h2 className="section-header">Our Story</h2>
        </div>
        <div className="our-story-text-container">
          <p className="our-story-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </div>
    </section>
    <section className="menu">
      <div className="menu-green-thing"></div>
      <div className="section-header-container">
        <h2 className="section-header" id="menu-section-header">Menu</h2>
      </div>
      <div className="menu-main">
        <div className="menu-left">
          <p className="menu-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </p>
          <button className="menu-btn">View The Menu</button>
        </div>
        <div className="menu-right">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DJztXj2GPfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section className="gallery">
      <div className="section-header-container">
        <h2 className="section-header">Gallery</h2>
      </div>
      <div className="gallery-main-container">
        <div className="gallery-container w-2 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?food" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?eating" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?restaurant" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-2">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?diningtable" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-4">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?thaifood" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-4">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?italianfood" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?mexicanfood" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-1 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?indianfood" alt="" />
            </div>
          </div>
        </div>
        <div className="gallery-container w-2 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?greekfood" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials">
        <div class="section-header-container">
            <h2 class="section-header">Testimonials</h2>
        </div>
        <div class="testimonial-card-container">
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Muhammad Zaidi</h2>
                        <h3 class="user-location">★★★★★</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                            "I had a really great time with the Race2Space premium tour. The trip was really smooth and it was a new experience. A fun place to bring my kids next time! The whole experience was luxurious and didnt lack anything, it was more than I could've asked for."
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Vedant Lad</h2>
                        <h3 class="user-location">★★★★★</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                            "I had a really great time with the Race2Space premium tour. The trip was really smooth and it was a new experience. A fun place to bring my kids next time! The whole experience was luxurious and didnt lack anything, it was more than I could've asked for."
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Saakshith Chikoti</h2>
                        <h3 class="user-location">★★★☆☆</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                            "I had a really great time with the Race2Space premium tour. The trip was really smooth and it was a new experience. A fun place to bring my kids next time! The whole experience was luxurious and didnt lack anything, it was more than I could've asked for."
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Veer Jain</h2>
                        <h3 class="user-location">★★★★★</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                            "I had a really great time with the Race2Space premium tour. The trip was really smooth and it was a new experience. A fun place to bring my kids next time! The whole experience was luxurious and didnt lack anything, it was more than I could've asked for."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default homepage