import React from "react"
import "../../styles/Side.css"
import Slider from "react-slick"
import Heading from "../components/Heading"
import Sport from "../../assets/sports.jpg"
import Advertisement from "../../assets/sports.jpeg"
import SocialMedia from "../components/SocialMedia"
import ContactUs from "../components/ContactUs"
import Headlines from "../components/Headlines"
import { Link } from "react-router-dom"

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

  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Headlines news={allNews}/>

      <Heading title='Advertisement' />
      <section className='banner'>
        <img src={Advertisement} alt='advertisement' />
      </section>

      <section className='category'>
        <Heading title='Category' />
        {catgeory.map((val, idx) => {
          return (
            <Link to={`/${val.toLocaleLowerCase()}`} onClick={HandleClick} className="sideCat">
              <div className='category category1' key={idx}>
                <span>{val}</span>
              </div>
            </Link>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='News Gallery' />
        <Slider {...settings}>
          {allNews.map((item) => {
            return (
              <div className='img' key={item._id}>
                {item.file ? <img src={item.file.secure_url} alt={item.title}/> : <img src={Sport} alt={item.title}/>}
              </div>
            )
          })}
        </Slider>
      </section>

      <Heading title='Stay Connected' />
      <SocialMedia />

      <ContactUs />
    </>
  )
}

export default Side
