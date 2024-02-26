import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import Heading from '../components/Heading'
import CategoryCardBtm from "../complex/CategoryCardBtm"
import Side from '../complex/Side'
import "../../styles/Politics.css"
import SettingsObj from '../../rules/SettingsObj'
import AuthContext from '../../context/ContextApi'
import FilterCat from '../../rules/FilterCat'
import { GetAllNewsApi } from '../../fetchApi/FetchAPI'
import FilterAllNewsByDateTime from '../../rules/FilterAllNewsByDateTime'


const Education = () => {
  const NewsContext = useContext(AuthContext)
  const setMyNews = NewsContext.setMyNews

  const [News, setNews] = useState([])
  const [allNews, setAllNews] = useState([])

  const HandleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    GetAllNewsApi().then((data) => {
      if (data.status === 200) {
        setNews(data.data.news)
        HandleClick()
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
          <Side news = {education}/>
        </div>
      </div>
    </>
  )
}

export default Education