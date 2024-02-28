import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import Heading from '../components/Heading'
import CategoryCardBtm from "../complex/CategoryCardBtm"
import "../../styles/Politics.css"
import SettingsObj from '../../rules/SettingsObj'
import AuthContext from '../../context/ContextApi'
import FilterCat from '../../rules/FilterCat'
import { GetAllNewsApi } from '../../fetchApi/FetchAPI'
import FilterAllNewsByDateTime from '../../rules/FilterAllNewsByDateTime'
import Headlines from '../components/Headlines'
import SocialMedia from '../components/SocialMedia'
import ContactUs from '../components/ContactUs'
import WindowScroll from '../../rules/WindowScroll'



const Business = () => {
  const NewsContext = useContext(AuthContext)
  const setMyNews = NewsContext.setMyNews

  const [News, setNews] = useState([])
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    WindowScroll()
  },[])

  useEffect(() => {
    GetAllNewsApi().then((data) => {
      if (data.status === 200) {
        setNews(data.data.news)
      }
      else {
        console.log(data.data.message);
      }
    })
  },[])

  useEffect(() => {
    setAllNews(FilterAllNewsByDateTime(News))
  },[News])

  useEffect(() => {
    setMyNews({type: "allNews", payload: allNews})
  },[allNews, setMyNews])

  const business = FilterCat(allNews, "business");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero politics={business[0]} country={business[1]} world={business[2]} sports={business[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Business"/>
          <div className="card-container">
            <NewsCard news = {business}/>
          </div>
          <CategoryCardBtm title="Others" news={others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Headlines title="Recent Posts" news={business} len={5}/>
          <Heading title='Stay Connected' />
          <SocialMedia />
          <ContactUs />
        </div>
      </div>
    </>
  )
}

export default Business