import React, { useContext } from 'react'
import Sports from "../../assets/sports.jpg"
import DnNews from "../../assets/DN Logo.png"
import Email from "../../assets/email.png"
import Phone from "../../assets/phone.png"
import "../../styles/Footer.css"
import AuthContext from "../../context/ContextApi"
import FilterCat from "../../rules/FilterCat"
import { Link } from 'react-router-dom'


const Footer = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const world = FilterCat(allNews, "world");
  const sports = FilterCat(allNews, "sports");
  const politics = FilterCat(allNews, "politics");
  const technology = FilterCat(allNews, "technology");
  const country = FilterCat(allNews, "country");
  const entertainment = FilterCat(allNews, "entertainment");

  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const sportsOne = sports[0]
  const sportsTwo = sports[1]
  const worldOne = world[0]
  const worldTwo = world[1]

  return (
    <>
      <div className="footer-container">
        <div className="footer-top-container">
          <div className="footer-top">
            <div className="footer-info-logo">
              <img src={DnNews} alt="DnNews"  style={{width : 30, height : 30}}/>
              <h3>DailyNews</h3>
            </div>
            <div className="footer-info-details">
              <p>DailyNews is an amazing magazine Blogger theme that is easy to customize for your needs.</p>
            </div>
            <div className="footer-contact">
              <img src={Email} alt="Email"  style={{width : 25, height : 25}}/>
              <p>sahajadurahaman@gmail.com</p>
            </div>
            <div className="footer-contact">
              <img src={Phone} alt="Phone" style={{width : 25, height : 25}}/>
              <p>+91 9547332860</p>
            </div>
          </div>

          <div className="footer-top-boxes">
            <h3>WORLD</h3>
            {worldOne &&
              <Link to={`/newsdetails/${worldOne._id}`} onClick={HandleClick}>
                <div className='item'>
                  <img src={worldOne.file ? worldOne.file.secure_url : Sports} alt={worldOne.title} style={{width : 70, height : 50}}/>
                  <p>{worldOne.title.slice(0, 60)}...</p>
                </div>
              </Link>
            }
            {worldTwo &&
              <Link to={`/newsdetails/${worldTwo._id}`} onClick={HandleClick}>
                <div className='item'>
                  <img src={worldTwo.file ? worldTwo.file.secure_url : Sports} alt={worldTwo.title} style={{width : 70, height : 50}}/>
                  <p>{worldTwo.title.slice(0, 60)}...</p>
                </div>
              </Link>
            }
          </div>

          <div className="footer-top-boxes">
            <h3>SPORTS</h3>
            {sportsOne &&
              <Link to={`/newsdetails/${sportsOne._id}`} onClick={HandleClick}>
                <div className='item'>
                  <img src={sportsOne.file ? sportsOne.file.secure_url : Sports} alt={sportsOne.title} style={{width : 70, height : 50}}/>
                  <p>{sportsOne.title.slice(0, 60)}...</p>
                </div>
              </Link>
            }
            {sportsTwo &&
              <Link to={`/newsdetails/${sportsTwo._id}`} onClick={HandleClick}>
                <div className='item'>
                  <img src={sportsTwo.file ? sportsTwo.file.secure_url : Sports} alt={sportsTwo.title} style={{width : 70, height : 50}}/>
                  <p>{sportsTwo.title.slice(0, 60)}...</p>
                </div>
              </Link>
            }
          </div>
          
          <div className="footer-top-boxes">
            <h3>NEWS</h3>
            <ul>
              <li>
                <Link to="/politics" onClick={HandleClick}>
                  <span>Politics</span> <label>({politics.length})</label>
                </Link>
              </li>
              <li>
                <Link to="/technology" onClick={HandleClick}>
                  <span>Technology</span> <label>({technology.length})</label>
                </Link>
              </li>
              <li>
                <Link to="/country" onClick={HandleClick}>
                  <span>Country</span> <label>({country.length})</label>
                </Link>
              </li>
              <li>
                <Link to="/entertainment" onClick={HandleClick}>
                  <span>Entertainment</span> <label>({entertainment.length})</label>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="blank-line"></div>

        <div className="footer-buttom-container">
          <div className="footer-buttom-boxes">
            <p>@ all righrs reserved</p>
          </div>
          <div className="footer-buttom-boxes">
            <p>created ❤️ by sahajadu rahaman</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer