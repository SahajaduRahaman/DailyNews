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



const Business = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const business = FilterCat(allNews, "business");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero  sports={business[0]} world={business[1]} country={business[2]} entertainment={business[3]}/>
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Business"/>
          <div className="card-container">
            <NewsCard news = {business}/>
          </div>
          <CategoryCardBtm title="Others" news={others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news={business}/>
        </div>
      </div>
    </>
  )
}

export default Business