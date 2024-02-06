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


const Country = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const country = FilterCat(allNews, "country");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={country[0]} world={country[1]} country={country[2]} entertainment={country[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Country"/>
          <div className="card-container">
            <NewsCard news = {country}/>
          </div>
          <CategoryCardBtm title="Others" news = {others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news = {country}/>
        </div>
      </div>
    </>
  )
}

export default Country