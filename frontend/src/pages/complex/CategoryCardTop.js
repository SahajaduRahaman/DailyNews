import React from "react"
import Slider from "react-slick"
import Heading from "../components/Heading"
import "../../styles/CategoryCardTop.css"
import Sport from "../../assets/sports.jpeg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import DateAndTime from "../components/DateAndTime"

const CategoryCardTop = (props) => {
  const news = props.news
  const settings = props.settings;

  return (
    <>
      <section className='cardTop'>
        <Heading title={props.title} />
        <div className='cardTop-container'>
          <Slider {...settings}>
            {news.map((item) => { return (
              <div className='cardTop-items' key={item._id}>
                <div className='cardTop-box cardTop-shadow'>
                  <div className='cardTop-images'>
                    <div className='img'>
                      {item.file ? <img src={item.file} alt={item.title}/> : <img src={Sport} alt={item.title}/>}
                    </div>
                    <div className='cardTop-category cardTop-category1'>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <div className='text'>
                    <Link to={`/newsdetails/${item._id}`}>
                      <h1 className='title'>{item.title.slice(0, 80)}</h1>
                    </Link>
                    <div className='date'>
                      <i className='fas fa-calendar-days'></i>
                      <DateAndTime dot={item.date} />
                    </div>
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

export default CategoryCardTop
