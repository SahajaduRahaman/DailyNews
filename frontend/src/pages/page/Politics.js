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


const Politics = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const politics = FilterCat(allNews, "politics");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={politics[0]} world={politics[1]} country={politics[2]} entertainment={politics[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Politics"/>
          <div className="card-container">
            <NewsCard news = {politics}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news = {politics}/>
        </div>
      </div>
    </>
  )
}

export default Politics