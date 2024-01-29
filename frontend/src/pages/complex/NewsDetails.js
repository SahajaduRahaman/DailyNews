import React, { useEffect, useState } from 'react'
import { GetNewsByIDApi } from '../../fetchApi/FetchAPI'
import { useParams } from 'react-router-dom'

const NewsDetails = () => {
  const path = useParams()

  const [currentNews, setCurrentNews] = useState({})

  useEffect(() => {
    GetNewsByIDApi(path.id).then((data) => {
      if (data.status === 200) {
        console.log(data.data.news)
        setCurrentNews(data.data.news)
      }
      else {
        alert("news added failed.")
        console.log(data.data.message)
      }
    });

  },[path])

  return (
    <div className="news-containet">
      <div className="newsTitle">
        <h3>{currentNews.title}</h3>
      </div>
      <div className="news-description">
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
      <div className="edit-delete">
        <div className="edit">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <div className="delete">
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails