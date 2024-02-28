import React, { useContext, useEffect, useState } from 'react'
import { GetNewsByIDApi } from '../../fetchApi/FetchAPI'
import { useParams } from 'react-router-dom'
import DateAndTime from '../components/DateAndTime'
import "../../styles/NewsDetails.css"
import AuthContext from '../../context/ContextApi'
import FilterCat from '../../rules/FilterCat'
import Headlines from '../components/Headlines'
import Heading from '../components/Heading'
import WindowScroll from "../../rules/WindowScroll"
import ContactUs from '../components/ContactUs'
import CategoryCardBtm from './CategoryCardBtm'
import SettingsObj from "../../rules/SettingsObj"
import SocialMedia from '../components/SocialMedia'

const NewsDetails = () => {
  const { oneSettings } = SettingsObj
  const newsContext = useContext(AuthContext)
  const catNews = newsContext.myNews.allNews
  const path = useParams()

  const [currentNews, setCurrentNews] = useState({})
  const [categoryNews, setcategoryNews] = useState([])

  useEffect(() => {
    WindowScroll()
    GetNewsByIDApi(path.id).then((data) => {
      if (data.status === 200) {
        setCurrentNews(data.data.news)
      }
      else {
        alert(data.data.message)
      }
    });
  },[path])

  useEffect(() => {
    setcategoryNews(FilterCat(catNews, currentNews.category))
  },[currentNews, catNews])

  return (
    <>
      { currentNews ?
        <div className="news-container">
          <div className="newsdetails_box">
            <Heading title={currentNews.category ? `${currentNews.category.toUpperCase()}` : ""} />
            <div className="newsTitle">
              <h3>{currentNews.title}</h3>
            </div>
            <div className='ca_da_ti'>
              <div className='news_info'>
                <span className='newsdetails_category'>By {currentNews.reporterName ? currentNews.reporterName : "Loading..."}</span>
                <DateAndTime dot={currentNews.date}/>
              </div>
              <div className='link_icons'>
                <a href={currentNews.facebookLink} target='_blank' rel="noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href={currentNews.youtubeLink} target='_blank' rel="noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className='newsdetails_picture'>
              {currentNews.file ? 
                <img src={currentNews.file.secure_url} alt={currentNews.title} />
              :
                <div>Loading....</div>
              }
            </div>
            <div className="news-links">
              <a href={currentNews.facebookLink} target='_blank' rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
                <span>Watch on Facebook</span>
              </a>
              <a href={currentNews.youtubeLink} target='_blank' rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
                <span>Watch on Youtube</span>
              </a>
            </div>
            <div className="news-description">
              <p>{currentNews.description}</p>
            </div>
            <div className="extra-news">
              <CategoryCardBtm title="Similar News" news={categoryNews} settings={oneSettings}/>
            </div>
          </div>
          <div className='newsdetails_side'>
            <Headlines title="Recent Posts" news={categoryNews} len={5}/>
            <Heading title='Stay Connected' />
            <SocialMedia />
            <ContactUs />
          </div>
        </div>
        :
        <div>Loading...</div>
      }
    </>
  )
}

export default NewsDetails