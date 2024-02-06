import React, { useEffect, useState } from 'react'
import { GetNewsByIDApi } from '../../fetchApi/FetchAPI'
import { useParams } from 'react-router-dom'
import DateAndTime from '../components/DateAndTime'
import "../../styles/NewsDetails.css"

const NewsDetails = () => {
  const path = useParams()
  const [currentNews, setCurrentNews] = useState({})

  useEffect(() => {
    GetNewsByIDApi(path.id).then((data) => {
      if (data.status === 200) {
        setCurrentNews(data.data.news)
      }
      else {
        alert(data.data.message)
      }
    });

  },[path])


  return (
    <>
      { currentNews ?
        <div className="news-container">
          <div className="newsTitle">
            <h3>{currentNews.title}</h3>
          </div>
          <div className="news-description">
            <div className='ca_da_ti'>
              <span>{currentNews.category}</span>
              <DateAndTime dot={currentNews.date}/>
            </div>
            <p>{currentNews.description}</p>
          </div>
          <div className="newl-links">
            <a href={currentNews.youtubeLink} target='_blank' rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
              <span>Watch on Youtube</span>
            </a>
            <a href={currentNews.facebookLink} target='_blank' rel="noreferrer">
              <i className="fa-brands fa-facebook"></i>
              <span>Watch on Facebook</span>
            </a>
          </div>
        </div>
        :
        <div>Loading...</div>
      }
    </>
  )
}

export default NewsDetails