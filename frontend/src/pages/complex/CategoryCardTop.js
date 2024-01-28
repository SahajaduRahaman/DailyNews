import React from "react"
import Slider from "react-slick"
// import { ppost } from "../../../../dummyData"
import Heading from "../components/Heading"
import "../../styles/CategoryCardTop.css"
import Sport from "../../assets/sports.jpeg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

// copy same code of popular
const CategoryCardTop = (props) => {

  const pop = [1,2,3,4,5,6]
  const settings = props.settings;

  return (
    <>
      <section className='cardTop'>
        <Heading title={props.title} />
        <div className='cardTop-container'>
          <Slider {...settings}>
            {pop.map((idx) => { return (
              <div className='cardTop-items' key={idx}>
                <div className='cardTop-box cardTop-shadow'>
                  <div className='cardTop-images'>
                    <div className='img'>
                      <img src={Sport} alt='' />
                    </div>
                    <div className='cardTop-category cardTop-category1'>
                      <span>Sport</span>
                    </div>
                  </div>
                  <div className='text'>
                    <Link to={`/newsdetails/${idx}`}>
                      <h1 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, omnis!</h1>
                    </Link>
                    <div className='date'>
                      <i className='fas fa-calendar-days'></i>
                      <label> 22 jan 2024</label>
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
