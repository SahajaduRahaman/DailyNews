import React from "react"
import "../../styles/CategoryCardBtm.css"
import Slider from "react-slick"
import Heading from "../components/Heading"
import Sport from "../../assets/sports.jpeg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import DateAndTime from "../components/DateAndTime"

const CategoryCardBtm = (props) => {
  const others = props.news
  const settings = props.settings;


  return (
    <>
      <section className='cardBtm'>
        <Heading title={props.title} />
        <div className='cardBtm-container'>
          <Slider {...settings}>
            {others && others.map((item) => { return ( 
              <div className='cardBtm-items' key={item._id}>
                <div className='cardBtm-box cardBtm-shadow cardBtm-flexSB'>
                  <div className='cardBtm-images'>
                    <div className='cardBtm-img'>
                    {item.image ? <img src={item.image} alt={item.title}/> : <img src={Sport} alt={item.title}/>}
                    </div>
                    <div className='cardBtm-catagory cardBtm-catagory1'>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <div className='cardBtm-text'>
                    <Link to={`/newsdetails/${item._id}`}>
                    <h1 className='cardBtm-title'>{item.title.slice(0, 100)}</h1>
                    </Link>
                    <div className='cardBtm-date'>
                      <i className='fas fa-calendar-days'></i>
                      <DateAndTime dot={item.date} />
                    </div>
                    <p className='cardBtm-desc'>{item.description.slice(0, 400)}</p>
                  </div>
                </div>
              </div>
            )})}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default CategoryCardBtm