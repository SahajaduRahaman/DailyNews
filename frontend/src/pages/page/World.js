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


const World = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const world = FilterCat(allNews, "world");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={world[0]} world={world[1]} country={world[2]} entertainment={world[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="World"/>
          <div className="card-container">
            <NewsCard news = {world}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news = {world}/>
        </div>
      </div>
    </>
  )
}

export default World