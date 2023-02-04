import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import heroImage from "./hero_img.png"
import "./homepage.css"
import ourStoryImage1 from "./our_story_image_1.jpg"
import edibleSpoon from "./edible_spoon.jpg"
import backgroundVideo from "./background_video.mp4"
import promoVideo from "./promo_video.mp4"
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'
import logoLight from "../logo_light.png"
import logoDark from "../green_spoon_logo.png"
import { useMediaQuery } from 'react-responsive';

const Homepage = () => {
  // const [isMobile, setIsMobile] = useState(false)
 
  // //choose the screen size 
  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //       setIsMobile(true)
  //   } else {
  //       setIsMobile(false)
  //   }
  // }

  // // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize)
  // })

  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` });

  return (
    <m.div 
      initial={{opacity: 0.5}} 
      animate={{opacity: 1}}
      transition={{duration: 0.95, ease: 'easeOut'}}
      exit={{opacity: 1}}
    >
    <section className="homepage">
        <div className="green-thing">
          
        </div>
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
        { isMobile ?
          <Navbar 
            logo={logoLight}
            color="white"
            navLinkColor="white"
          /> 
          : 
          <Navbar 
            logo={logoLight}
            color="white"
            navLinkColor="white"
          /> 
        }
        
        <m.div 
          className="hero" 
          animate={{x: 0}}
          initial={{x: '-100%'}}
          transition={{duration: 0.85, ease: 'easeOut'}}
          exit={{opacity: 1}}
        >
          <div className="hero-left">
            <h1 className="hero-header">Meatless Foods, Meaty Flavors</h1>
            <p className="hero-description">
              Looking for classic flavors from around the world?
              A quick bite to go? A full meal featuring cuisines from around the world? We've got it all, and it's all meatless!
            </p>
            <div className="hero-button-container">
              <Link to="/reservations"><button className="hero-main-button">Make A Reservation</button></Link>
              <Link to="/menu"><button className="hero-secondary-button">View Menu</button></Link>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="" className="hero-img" />
          </div>
        </m.div>
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
          It all started with our visit to a nearby poultry farm where the idea of a vegan restaurant first came about. We knew that there was a market for vegan food eaters, so we hired chefs who have learned from the greatest from all around the world, specializing in cuisines that represent the story of that region. We have observed how food has brought people together, and in the spirit of that, we give away leftovers to our nearest church and homeless shelters. Our restaurant has partnered up with Incredible Eats to bring edible silverware, making the planet ever so slightly more livable. It all happens one spoon at a time.
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
          From quick vegan burgers to take-away to creamy Tortellini Gorgonzola's, you can experience almost anything your heart desires. You can mix and match from any cuisine and have the most diverse meal of your life. The best part - it's all meatless!
          </p>
          <Link to="/menu"><button className="menu-btn">View The Menu</button></Link>
        </div>
        <div className="menu-right">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/DJztXj2GPfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <video controls autoplay src={promoVideo} height="315"></video>
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
                    <div class="user-img muhammad"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Muhammad Zaidi</h2>
                        <h3 class="user-location">★★★★★</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                          "I have been a long-time fan of this vegetarian restaurant and it never disappoints. The flavors are always bold, the ingredients are fresh, and the portions are generous. Whether you're a vegetarian or not, you're sure to find something you'll love here!"
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img vedant"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Vedant Lad</h2>
                        <h3 class="user-location">★★★★☆</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                          "The atmosphere at this restaurant is perfect for a relaxing meal. The staff is friendly, the lighting is soft, and the music is soothing. And then there's the food – every dish is bursting with flavor and nutrition. A must-visit for any foodie!"
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img saakshith"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Saakshith Chikoti</h2>
                        <h3 class="user-location">★★★☆☆</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                          "I recently took my meat-loving friends to this vegetarian restaurant, and they were pleasantly surprised. They loved the taste and quality of the food, and couldn't believe it was all plant-based. If you're looking for a healthy, satisfying meal, this is the place to go."
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="user-img-container">
                    <div class="user-img veer"></div>
                </div>
                <div class="user-rating-container">
                    <div class="user-rating-container-top">
                        <h2 class="user-name">Veer Jain</h2>
                        <h3 class="user-location">★★★★★</h3>
                    </div>
                    <div class="user-rating-container-bottom">
                        <p class="user-rating-description">
                        "I had a really great experience with The Green Spoon. The ambience was luxurious and the staff were very friendly. A fun place to bring my kids next time! I got to try foods from multiple different cusines and it was cool trying all these new types of foods."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </m.div>
  )
}

export default Homepage