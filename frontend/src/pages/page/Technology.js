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


const Technology = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const technology = FilterCat(allNews, "technology");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={technology[0]} world={technology[1]} country={technology[2]} entertainment={technology[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Technology"/>
          <div className="card-container">
            <NewsCard news = {technology}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news = {technology}/>
        </div>
      </div>
    </>
  )
}

export default Technology