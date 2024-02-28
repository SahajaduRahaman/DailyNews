import React, { useEffect, useState } from "react";
import { GetAdminNewsApi } from "../../fetchApi/FetchAPI";
import FilterAllNewsByDateTime from "../../rules/FilterAllNewsByDateTime";
import NewsCard from "../components/NewsCard";
import FilterCat from "../../rules/FilterCat";
import "../../styles/AdminNews.css"
import WindowScroll from "../../rules/WindowScroll";

const AdminNews = () => {
  const [news, setNews] = useState([])
  const [currentNews, setCurrentNews] = useState([]);
  const [filter, setFilter] = useState("allNews")

  useEffect(() => {
    GetAdminNewsApi().then((data) => {
      if (data.status === 200) {
        setNews(data.data.news);
      } else {
        alert("failed to fetch news.");
        console.log(data.data.message);
      }
    });
  },[]);

  useEffect(() => {
    setCurrentNews(FilterAllNewsByDateTime(news))
  },[news])

  useEffect(() => {
    setCurrentNews(FilterCat(news, filter))
    WindowScroll()
  },[filter, news])

  useEffect(() => {
    WindowScroll()
  },[])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }


  return (
    <>
      <div className="adminNews-container">
        <div className="filternews">
          <div className="filter-option">
            <select name="category" id="category" value={filter} onChange={(e) => handleFilterChange(e)}>
              <option value="allNews" >All News</option>
              <option value="politics" >Politics</option>
              <option value="technology" >Technology</option>
              <option value="country" >Country</option>
              <option value="world" >World</option>
              <option value="business" >Business</option>
              <option value="education" >Education</option>
              <option value="career" >Career</option>
              <option value="entertainment" >Entertainment</option>
              <option value="sports" >Sports</option>
              <option value="others" >Others</option>
            </select>
          </div>
          <div className="filter-icon">
            <i className="fa-solid fa-filter"></i>
          </div>
        </div>
        <div className="admin-news-container">
          {currentNews &&
            <div className="card-container">
              <NewsCard news = {currentNews}/>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default AdminNews;
