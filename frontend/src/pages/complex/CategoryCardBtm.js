import React from "react"
import "../../styles/CategoryCardBtm.css"
import Slider from "react-slick"
import Heading from "../components/Heading"
// import { popular } from "../../../../dummyData"
import Sport from "../../assets/sports.jpeg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

const CategoryCardBtm = (props) => {

  const pop = [1,2,3,4,5,6]
  const settings = props.settings;

  return (
    <>
      <section className='cardBtm'>
        <Heading title={props.title} />
        <div className='cardBtm-container'>
          
          <Slider {...settings}>
            {/* {popular
              .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return ( */}
                {pop.map((val, idx) => { return ( 
                  <div className='cardBtm-items' key={val}>
                    <div className='cardBtm-box cardBtm-shadow cardBtm-flexSB'>
                      <div className='cardBtm-images'>
                        <div className='cardBtm-img'>
                          <img src={Sport} alt='' />
                        </div>
                        <div className='cardBtm-catagory cardBtm-catagory1'>
                          <span>Others</span>
                        </div>
                      </div>
                      <div className='cardBtm-text'>
                        <Link to={`/newsdetails/${idx}`}>
                        <h1 className='cardBtm-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, nemo?</h1>
                        </Link>
                        <div className='cardBtm-date'>
                          <i className='fas fa-calendar-days'></i>
                          <label> 21 jan 2024</label>
                        </div>
                        <p className='cardBtm-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto blanditiis, repellendus deserunt consequuntur facere aspernatur suscipit error voluptatem veritatis, facilis saepe quia natus commodi similique laboriosam cum nulla est.</p>
                      </div>
                    </div>
                  </div>

                )})}

                {/* )
              })} */}
          </Slider>
          
        </div>
      </section>
    </>
  )
}

export default CategoryCardBtm