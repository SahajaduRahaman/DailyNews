import React from 'react'
import Sports from "../../assets/sports.jpeg"
import DnNews from "../../assets/DN Logo.png"
import Email from "../../assets/email.png"
import Phone from "../../assets/phone.png"
import "../../styles/Footer.css"


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-top-container">
          <div className="footer-top">
            <div className="footer-info-logo">
              <img src={DnNews} alt="DnNews"  style={{width : 30, height : 30}}/>
              <h3>DailyNews</h3>
            </div>
            <div className="footer-info-details">
              <p>Bushan is an amazing magazine Blogger theme that is easy to customize for your needs.</p>
            </div>
            <div className="footer-contact">
              <img src={Email} alt="Email"  style={{width : 25, height : 25}}/>
              <p>sahajadurahaman@gmail.com</p>
            </div>
            <div className="footer-contact">
              <img src={Phone} alt="Phone" style={{width : 25, height : 25}}/>
              <p>+91 9547332860</p>
            </div>
          </div>

          <div className="footer-top-boxes">
            <h3>WORLD</h3>
            <div className='item'>
              <img src={Sports} alt='Sports' style={{width : 70, height : 70}}/>
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src={Sports} alt='Sports' style={{width : 70, height : 70}}/>
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>

          <div className="footer-top-boxes">
            <h3>SPORTS</h3>
            <div className='item'>
              <img src={Sports} alt='' style={{width : 70, height : 70}}/>
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src={Sports} alt='' style={{width : 70, height : 70}}/>
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          
          <div className="footer-top-boxes">
            <h3>NEWS</h3>
            <ul>
              <li>
                <span>Politics</span> <label>(5)</label>
              </li>
              <li>
                <span>Technology</span> <label>(6)</label>
              </li>
              <li>
                <span>Country</span> <label>(7)</label>
              </li>
              <li>
                <span>Entertainment</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="blank-line"></div>

        <div className="footer-buttom-container">
          <div className="footer-buttom-boxes">
            <p>@ all righrs reserved</p>
          </div>
          <div className="footer-buttom-boxes">
            <p>made ❤️ by sahajadu rahaman</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer