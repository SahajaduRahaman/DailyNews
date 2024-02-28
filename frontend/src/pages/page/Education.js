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


const Education = () => {
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

  const education = FilterCat(allNews, "education");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero politics={education[0]} country={education[1]} world={education[2]} sports={education[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Education"/>
          <div className="card-container">
            <NewsCard news = {education}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Headlines title="Recent Posts" news={education} len={5}/>
          <Heading title='Stay Connected' />
          <SocialMedia />
          <ContactUs />
        </div>
      </div>
    </>
  )
}

export default Education