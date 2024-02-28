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


const Country = () => {
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

  const country = FilterCat(allNews, "country");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero politics={country[0]} country={country[1]} world={country[2]} sports={country[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Country"/>
          <div className="card-container">
            <NewsCard news = {country}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Headlines title="Recent Posts" news={country} len={5}/>
          <Heading title='Stay Connected' />
          <SocialMedia />
          <ContactUs />
        </div>
      </div>
    </>
  )
}

export default Country