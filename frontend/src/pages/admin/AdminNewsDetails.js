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
import DailyNewssample from "../../assets/DailyNewsSample.jpg"

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
        <div className="news-container">
          <div className="newsdetails_box">
            {!visible && 
              <div className="hide_box">
                <div className="newsTitle">
                  {currentNews ?
                    <h3>{currentNews.title ? currentNews.title : "Title is loading, please wait..."}</h3>
                  :
                    <h3>Title is loading, please wait...</h3>
                  }
                </div>
                <div className='ca_da_ti'>
                  <div className='news_info'>
                    {currentNews ?
                      <span className='newsdetails_category'>{currentNews.category ? currentNews.category.toUpperCase() : "Category"}</span>
                    :
                      <span className='newsdetails_category'>Category</span>
                    }
                    {currentNews ?
                      <DateAndTime dot={currentNews.date ? currentNews.date : `${new Date().toISOString()}`}/>
                    :
                      <DateAndTime dot={`${new Date().toISOString()}`}/>
                    }
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
                  {currentNews ? 
                    <img src={currentNews.file ? currentNews.file.secure_url : DailyNewssample} alt={currentNews.title} />
                  :
                    <img src={DailyNewssample} alt="DailyNewssample" />
                  }
                </div>
                <div className="news-links">
                  {currentNews ?
                    <a href={currentNews.facebookLink ? currentNews.facebookLink : "https://www.youtube.com/watch?v=3ESW9uzVMZo&ab_channel=Rmsertugual"} target='_blank' rel="noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                      <span>Watch on Facebook</span>
                    </a>
                  :
                    <a href="https://www.youtube.com/watch?v=3ESW9uzVMZo&ab_channel=Rmsertugual" target='_blank' rel="noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                      <span>Watch on Facebook</span>
                    </a>
                  }
                  {currentNews ?
                    <a href={currentNews.youtubeLink ? currentNews.youtubeLink : "https://www.youtube.com/watch?v=3ESW9uzVMZo&ab_channel=Rmsertugual"} target='_blank' rel="noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                      <span>Watch on Youtube</span>
                    </a>
                  :
                    <a href="https://www.youtube.com/watch?v=3ESW9uzVMZo&ab_channel=Rmsertugual" target='_blank' rel="noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                      <span>Watch on Facebook</span>
                    </a>
                  } 
                </div>
                <div className="news-description">
                  {currentNews ?
                    <p>{currentNews.description ? currentNews.description : "This is description."}</p>
                  :
                    <p>This is description.</p>
                  }
                </div>
              </div>
            }
            <div className="editNews-box">
              {visible && <Editnews news = {currentNews} id={path.id} setVisible={setVisible}/>}
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

export default AdminNewsDetails