import React, { useEffect, useState } from 'react'
import { GetAdminNewsApi } from '../../fetchApi/FetchAPI'
import { Link } from "react-router-dom"


const AdminNews = () => {
  const [currentNews, setCurrentNews] = useState([])

  useEffect(() => {
    GetAdminNewsApi().then((data) => {
      if (data.status === 200) {
        setCurrentNews(data.data.news)
        console.log(data.data.news)
      }
      else {
        alert("news added failed.")
        console.log(data.data.message)
      }
    });
  },[])

  return (
    <>
      <div className="adminNews-container">
        {currentNews && currentNews.map((item, idx) => {
          return (
            <div className="adminNews" key={idx}>
              <Link to={`/newsdetails/${item._id}`}>
              <h3>{item.title}</h3>
              </Link>
              <p>{item.description}</p>
              <h6>{item.category}</h6>
              {item.youtubeLink && <a href={item.youtubeLink} target='_blank' rel="noreferrer">YoutubeLink</a>}
              {item.facebookLink && <a href={item.facebookLink} target='_blank' rel="noreferrer">FacebookLink</a>}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AdminNews