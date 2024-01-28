import React from 'react'
import "../../styles/TopBanner.css"
import DailyNewsBanner from "../../assets/DailyNews Banner.jpg"
import DailyNewsText from "../../assets/DailyNewsText.png"


const TopBanner = () => {
  return (
    <>
      <section className='top-banner_container'>
        <div className="banner-container">
          <div className="left-banner">
            <img src={DailyNewsText} alt="" />
          </div>
          <div className="right-banner">
            <img src={DailyNewsBanner} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBanner