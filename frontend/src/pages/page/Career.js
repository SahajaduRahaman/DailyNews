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


const Career = () => {
  const News = useContext(AuthContext)
  const allNews = News.myNews.allNews

  const career = FilterCat(allNews, "career");
  const others = FilterCat(allNews, "others");
  const oneSettings = SettingsObj.oneSettings;

  return (
    <>
      <Hero sports={career[0]} world={career[1]} country={career[2]} entertainment={career[3]} />
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Career"/>
          <div className="card-container">
            <NewsCard news = {career}/>
          </div>
          <CategoryCardBtm title="Others" news={others} settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side news = {career}/>
        </div>
      </div>
    </>
  )
}

export default Career