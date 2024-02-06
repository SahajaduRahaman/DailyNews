import React, { useContext } from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import Heading from '../components/Heading'
import CategoryCardBtm from "../complex/CategoryCardBtm"
import Side from '../complex/Side'
import "../../styles/Politics.css"
import SettingsObj from '../../rules/SettingsObj'
import AuthContext from '../../context/ContextApi'
import FilterCat from '../../rules/FilterCat'


const Education = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const education = FilterCat(allNews, "education");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={education[0]} world={education[1]} country={education[2]} entertainment={education[3]}/>
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