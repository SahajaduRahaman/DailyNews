import React from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import Heading from '../components/Heading'
import CategoryCardBtm from "../complex/CategoryCardBtm"
import Side from '../complex/Side'
import "../../styles/Politics.css"
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';

const Entertainment = () => {
  const entertainmentNews = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]

  const initialState = useContext(AuthContext)
  const oneSettings = initialState.state.oneSettings;

  return (
    <>
      <Hero />
      <div className="newsCard-container">
        <div className="newsCard-left">
          <Heading title="Entertainment"/>
          <div className="card-container">
            <NewsCard news = {entertainmentNews}/>
          </div>
          <CategoryCardBtm title="Others" settings={oneSettings}/>
        </div>
        <div className="newsCard-right">
          <Side />
        </div>
      </div>
    </>
  )
}

export default Entertainment