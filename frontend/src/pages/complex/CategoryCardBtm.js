import React from "react";
import "../../styles/CategoryCardBtm.css";
import Slider from "react-slick";
import Heading from "../components/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import DateAndTime from "../components/DateAndTime";
import DailyNewssample from "../../assets/DailyNewsSample.jpg";

const CategoryCardBtm = (props) => {
  const others = props.news;
  const settings = props.settings;

  return (
    <>
      <section className="cardBtm">
        <Heading title={props.title} />
        {others &&
          <div className="cardBtm-container">
            <Slider {...settings}>
              {others.map((item) => {
                return (
                  <div className="cardBtm-items" key={item._id}>
                    <div className="cardBtm-box cardBtm-shadow cardBtm-flexSB">
                      <div className="cardBtm-images">
                        <div className="cardBtm-img">
                          {item ?
                            <img
                              src={
                                item.file
                                  ? item.file.secure_url
                                  : DailyNewssample
                              }
                              alt={item.title}
                            />
                          :
                            <img src={DailyNewssample} alt="newsimage" />
                          }
                        </div>
                        <div className="cardBtm-catagory cardBtm-catagory1">
                          <span>
                            {item.category ? item.category : "Loading..."}
                          </span>
                        </div>
                      </div>
                      <div className="cardBtm-text">
                        <Link to={`/newsdetails/${item._id}`}>
                          <h1 className="cardBtm-title">
                            {item.title
                              ? item.title.slice(0, 100)
                              : "Wait for loading..."}
                          </h1>
                        </Link>
                        <div className="cardBtm-date">
                          <i className="fas fa-calendar-days"></i>
                          <DateAndTime
                            dot={
                              item.date
                                ? item.date
                                : `${new Date().toISOString()}`
                            }
                          />
                        </div>
                        <p className="cardBtm-desc">
                          {item.description
                            ? item.description.slice(0, 200)
                            : "Wait for loading..."}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        }
      </section>
    </>
  );
};

export default CategoryCardBtm;
