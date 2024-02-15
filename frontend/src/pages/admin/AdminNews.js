import React, { useEffect, useState } from "react";
import { GetAdminNewsApi } from "../../fetchApi/FetchAPI";
import { Link } from "react-router-dom";
import DateAndTime from "../components/DateAndTime";
import FilterAllNewsByDateTime from "../../rules/FilterAllNewsByDateTime";

const AdminNews = () => {
  const [news, setNews] = useState([])
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    GetAdminNewsApi().then((data) => {
      if (data.status === 200) {
        setNews(data.data.news);
        console.log(data.data);
      } else {
        alert("failed to fetch news.");
        console.log(data.data.message);
      }
    });
  },[]);

  useEffect(() => {
    setCurrentNews(FilterAllNewsByDateTime(news))
  },[news])


  return (
    <>
      <div className="adminNews-container">
        {currentNews &&
          currentNews.map((item, idx) => {
            return (
              <div className="adminNews" key={idx}>
                <div className="news-title">
                  <Link to={`/adminnewsdetails/${item._id}`}>
                    <h3>{item.title.slice(0, 80)}</h3>
                  </Link>
                </div>

                <div className="date-time">
                  <DateAndTime dot={item.date} />
                </div>

                <div className="news-category">
                  <span>{item.category}</span>
                </div>
                <p>{item.description.slice(0, 300)}</p>

                <div className="links">
                  {item.youtubeLink && (
                    <a href={item.youtubeLink} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                      <span>Watch on Youtube</span>
                    </a>
                  )}
                  {item.facebookLink && (
                    <a
                      href={item.facebookLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook"></i>
                      <span>Watch on Facebook</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AdminNews;
