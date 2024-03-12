import React from "react"
import "../../styles/Side.css"
import Slider from "react-slick"
import Heading from "../components/Heading"
import SocialMedia from "../components/SocialMedia"
import ContactUs from "../components/ContactUs"
import Headlines from "../components/Headlines"
import { Link } from "react-router-dom"
import DailyNewssample from "../../assets/DailyNewsSample.jpg"
import AdvertisementImg from "../../assets/Advertisement 2.jpg"


const Side = (props) => {
  const allNews = props.news
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["Politics", "Technology", "Country", "World", "Business", "Education", "Career", "Entertainment", "Sports"]


  return (
    <>
      <div className="side-box">
        <Headlines news={allNews} len={11}/>
      </div>

      <div className="side-box">
        <Heading title='Advertisement' />
        <section className='banner'>
          <img src={AdvertisementImg} alt='advertisement' />
        </section>
      </div>

      <div className="side-box">
        <section className='category'>
          <Heading title='Category' />
          {catgeory.map((val, idx) => {
            return (
              <Link to={`/${val.toLocaleLowerCase()}`} className="sideCat">
                <div className='category category1' key={idx}>
                  <span>{val}</span>
                </div>
              </Link>
            )
          })}
        </section>
      </div>

      <div className="side-box">
        <section className='gallery'>
          <Heading title='News Gallery' />
          <Slider {...settings}>
            {allNews ? 
              allNews.map((item) => {
                return (
                  <div className='img gallery-img'>
                    {item.file ?
                      <img src={item.file.secure_url ? item.file.secure_url : DailyNewssample} alt={item.title} key={item._id}/>
                    :
                      <img src={DailyNewssample} alt={item.title} key={item._id}/>
                    }
                  </div>
                )})
              :
              <div className='img gallery-img'>
                <img src={DailyNewssample} alt="Gallery"/>
              </div>
            }
          </Slider>
        </section>
      </div>

      <div className="side-box">
        <Heading title='Stay Connected' />
        <SocialMedia />
      </div>

      <div className="side-box">
        <ContactUs />
      </div>
    </>
  )
}

export default Side