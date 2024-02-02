import React, { useEffect, useState } from 'react'
import { DeleteNewsApi, GetNewsByIDApi } from '../../fetchApi/FetchAPI'
import { useNavigate, useParams } from 'react-router-dom'
import Editnews from '../admin/Editnews'

const NewsDetails = () => {
  const path = useParams()
  const Navigate = useNavigate()

  const [currentNews, setCurrentNews] = useState({})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    GetNewsByIDApi(path.id).then((data) => {
      if (data.status === 200) {
        setCurrentNews(data.data.news)
      }
      else {
        alert("news added failed.")
        console.log(data.data.message)
      }
    });

  },[path, visible])

  const DeleteNews = () => {
    DeleteNewsApi(path.id).then((data) => {
      if (data.status === 200) {
        alert(data.data.message)
        Navigate(-1)
      }
      else {
        alert("news deleted failed.")
      }
    });
  }

  const HandleEditNews = () => {
    setVisible(true)
  }



  return (
    <>
      <div className="news-container">
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
          <div className="edit" onClick={HandleEditNews}>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="delete" onClick={DeleteNews}>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
      {visible && <Editnews news = {currentNews} id={path.id} setVisible={setVisible}/>}
    </>
  )
}

export default NewsDetails