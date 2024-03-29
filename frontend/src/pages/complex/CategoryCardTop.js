import React from "react"
import Slider from "react-slick"
import Heading from "../components/Heading"
import "../../styles/CategoryCardTop.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import DateAndTime from "../components/DateAndTime"
import DailyNewssample from "../../assets/DailyNewsSample.jpg"


const CategoryCardTop = (props) => {
  const news = props.news
  const settings = props.settings;
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <section className='cardTop'>
        <Heading title={props.title} />
        {news ?
          <div className='cardTop-container'>
            <Slider {...settings}>
              {news.map((item) => { return (
                <div className='cardTop-items' key={item._id}>
                  <div className='cardTop-box cardTop-shadow'>
                    <div className='cardTop-images'>
                      <div className='img'>
                        {item ?
                          <img src={item.file ? item.file.secure_url : DailyNewssample} alt={item.title}/>
                        :
                          <img src={DailyNewssample} alt={item.title}/>
                        }
                      </div>
                      <div className='cardTop-category cardTop-category1'>
                        <span>{item.category ? item.category : "Loading..."}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <Link to={`/newsdetails/${item._id}`}>
                        <h1 className='title'>{item.title ? item.title.slice(0, 60) : "Wait for loading"}...</h1>
                      </Link>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <DateAndTime dot={item.date ? item.date : `${new Date().toISOString()}`} />
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </Slider>
          </div>
        :
          <div className='cardTop-container'>
            <Slider {...settings}>
              {sampleArray.map((itm) => { return (
                <div className='cardTop-items' key={Date.now()}>
                  <div className='cardTop-box cardTop-shadow'>
                    <div className='cardTop-images'>
                      <div className='img'>
                        {itm ?
                          <img src={DailyNewssample} alt={Date.now()}/>
                        :
                          <img src={DailyNewssample} alt={Date.now()}/>
                        }
                      </div>
                      <div className='cardTop-category cardTop-category1'>
                        <span>"Loading..."</span>
                      </div>
                    </div>
                    <div className='text'>
                      <Link to={`/wait-for-loading`}>
                        <h1 className='title'>Wait for loading...</h1>
                      </Link>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <DateAndTime dot={`${new Date().toISOString()}`} />
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </Slider>
          </div>
        }
      </section>
    </>
  )
}

export default CategoryCardTop
