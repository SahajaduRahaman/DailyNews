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
import DailyNewssample from "../../assets/DailyNewsSample.jpg"


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
      <div className="news-container">
        <div className="newsdetails_box">
          <Heading title={currentNews.category ? currentNews.category.toUpperCase() : "Loading..."} />
          <div className="newsTitle">
            {currentNews ?
              <h3>{currentNews.title ? currentNews.title : "Title is loading, please wait..."}</h3>
            :
              <h3>"Title is loading, please wait..."</h3>
            }
          </div>
          <div className='ca_da_ti'>
            <div className='news_info'>
              {currentNews ?
                <span className='newsdetails_category'>By {currentNews.reporterName ? currentNews.reporterName : "Unknown"}</span>
              :
                <span className='newsdetails_category'>Loading...</span>
              }
              {currentNews ?
                <DateAndTime dot={currentNews.date ? currentNews.date : `${new Date().toISOString()}`}/>
              :
                <DateAndTime dot={`${new Date().toISOString()}`}/>
              }
            </div>
          </div>
          <div className='newsdetails_picture'>
            {currentNews ? 
              <img src={currentNews.file ? currentNews.file.secure_url : DailyNewssample} alt={currentNews.title} />
            :
              <img src={DailyNewssample} alt="DailyNewssample" />
            }
          </div>
          <div className="news-links">
            {currentNews ?
              <a href={currentNews.facebookLink ? currentNews.facebookLink : "https://www.youtube.com/watch?v=ts8i-6AtDfc&ab_channel=CKFreeVideoTemplates"} target='_blank' rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
                <span>Watch on Facebook</span>
              </a>
            :
              <a href="https://www.youtube.com/watch?v=ts8i-6AtDfc&ab_channel=CKFreeVideoTemplates" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
                <span>Watch on Facebook</span>
              </a>
            }
            {currentNews ?
              <a href={currentNews.youtubeLink ? currentNews.youtubeLink : "https://www.youtube.com/watch?v=ts8i-6AtDfc&ab_channel=CKFreeVideoTemplates"} target='_blank' rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
                <span>Watch on Youtube</span>
              </a>
            :
              <a href="https://www.youtube.com/watch?v=ts8i-6AtDfc&ab_channel=CKFreeVideoTemplates" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
                <span>Watch on Youtube</span>
              </a>
            }
          </div>
          <div className="news-description">
            {currentNews ?
              <p>{currentNews.description ? currentNews.description : "This is news description."}</p>
            :
              <p>Wait ! Description is loading...</p>
            }
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
    </>
  )
}

export default NewsDetails