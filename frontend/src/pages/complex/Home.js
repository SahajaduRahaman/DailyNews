import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Categories from './Categories'
import AuthContext from "../../context/ContextApi"
import FilterAllNewsByDateTime from '../../rules/FilterAllNewsByDateTime'
import { GetAllNewsApi } from '../../fetchApi/FetchAPI'
import FilterCat from '../../rules/FilterCat'

const Home = () => {
  const NewsContext = useContext(AuthContext)
  const setMyNews = NewsContext.setMyNews

  const [News, setNews] = useState([])
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    GetAllNewsApi().then((data) => {
      if (data.status === 200) {
        setNews(data.data.news)
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


  const politics = FilterCat(allNews, "politics");
  const country = FilterCat(allNews, "country");
  const world = FilterCat(allNews, "world");
  const sports = FilterCat(allNews, "sports");

  return (
    <>
      <Hero politics={politics[0]} country={country[0]} world={world[0]} sports={sports[0]}/>
      <Categories />
    </>
  )
}

export default Home