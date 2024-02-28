import React, { useContext, useEffect, useState } from 'react'
import { DeleteNewsApi, GetNewsByIDApi } from '../../fetchApi/FetchAPI'
import { useNavigate, useParams } from 'react-router-dom'
import Editnews from '../admin/Editnews'
import DateAndTime from '../components/DateAndTime'
import AuthContext from '../../context/ContextApi'
import Headlines from '../components/Headlines'
import Heading from '../components/Heading'
import SocialMedia from '../components/SocialMedia'
import ContactUs from '../components/ContactUs'
import WindowScroll from '../../rules/WindowScroll'
import FilterCat from '../../rules/FilterCat'
import SettingsObj from "../../rules/SettingsObj"
import CategoryCardBtm from '../complex/CategoryCardBtm'

const AdminNewsDetails = () => {
  const NewsContext = useContext(AuthContext)
  const { oneSettings } = SettingsObj
  const setMyNews = NewsContext.setMyNews
  const catNews = NewsContext.myNews.allNews

    const path = useParams()
    const Navigate = useNavigate()
  
    const [currentNews, setCurrentNews] = useState({})
    const [categoryNews, setcategoryNews] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      WindowScroll()
    },[])
  
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
  
    },[path.id, visible])

    useEffect(() => {
      setcategoryNews(FilterCat(catNews, currentNews.category))
    },[currentNews, catNews])
  
    const DeleteNews = () => {
      DeleteNewsApi(path.id).then((data) => {
        if (data.status === 200) {
          alert(data.data.message)
          Navigate(-1)
          setMyNews({type: "deleteNews", payload: path.id})
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
        { currentNews ?
          <div className="news-container">
            <div className="newsdetails_box">
              <div className="newsTitle">
                <h3>{currentNews.title}</h3>
              </div>
              <div className='ca_da_ti'>
                <div className='news_info'>
                  <span className='newsdetails_category'>{currentNews.category ? currentNews.category.toUpperCase() : ""}</span>
                  <DateAndTime dot={currentNews.date}/>
                </div>
                <div className='link_icons'>
                  <div className="edit" onClick={HandleEditNews}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <div className="edit" onClick={DeleteNews}>
                    <i className="fa-solid fa-trash"></i>
                  </div>
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
        {visible && <Editnews news = {currentNews} id={path.id} setVisible={setVisible}/>}
      </>
    )
}

export default AdminNewsDetails