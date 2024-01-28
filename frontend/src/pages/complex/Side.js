import React from "react"
import "../../styles/Side.css"
import Slider from "react-slick"
import Heading from "../components/Heading"
import Sport from "../../assets/sports.jpeg"
import SocialMedia from "../components/SocialMedia"
import ContactUs from "../components/ContactUs"
import Headlines from "../components/Headlines"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["Politics", "Technology", "Country", "World", "Business", "Education", "Career", "Entertainment", "Sports"]
  return (
    <>
      <Headlines />

      <Heading title='Advertisement' />
      <section className='banner'>
        <img src={Sport} alt='' />
      </section>

      <section className='category'>
        <Heading title='Category' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val, idx) => {
          return (
            <div className='category category1' key={idx}>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='News Gallery' />
        <Slider {...settings}>
          {/* {gallery.map((val) => {
            return ( */}
              <div className='img'>
                <img src={Sport} alt='' />
              </div>
            {/* )
          })} */}
        </Slider>
      </section>

      <Heading title='Stay Connected' />
      <SocialMedia />

      <ContactUs />
    </>
  )
}

export default Side
