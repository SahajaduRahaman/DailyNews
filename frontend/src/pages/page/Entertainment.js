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


const Entertainment = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const entertainment = FilterCat(allNews, "entertainment");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={entertainment[0]} world={entertainment[1]} country={entertainment[2]} entertainment={entertainment[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Entertainment"/>
          <div className="card-container">
            <NewsCard news = {entertainment}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news = {entertainment}/>
        </div>
      </div>
    </>
  )
}

export default Entertainment