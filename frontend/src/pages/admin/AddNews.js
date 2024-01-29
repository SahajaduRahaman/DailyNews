import React, { useState } from "react";
import { AddNewsApi } from "../../fetchApi/FetchAPI";

const AddNews = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    category: "",
    youtubeLink: "",
    facebookLink: "",
  });

  const handleFormChange = (e) => {
    setNews({...news, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    AddNewsApi(news).then((data) => {
      if (data.status === 200) {
        alert("news added successfully.")
        console.log(data.data.currentNews)
      }
      else {
        alert("news added failed.")
        console.log(data.data.message)
      }
    });
  }

  return (
    <div className="addnews-container">
      <div className="addnews-box">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={news.name} onChange={(e) => handleFormChange(e)} name="title"/>

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={news.description} onChange={(e) => handleFormChange(e)} name="description"/>

          <label htmlFor="category">Category:</label>
          <select name="category" id="category" value={news.category} onChange={(e) => handleFormChange(e)}>
            <option value="politics" >Politics</option>
            <option value="technology" >Technology</option>
            <option value="country" >Country</option>
            <option value="world" >World</option>
            <option value="business" >Business</option>
            <option value="education" >Education</option>
            <option value="career" >Career</option>
            <option value="entertainment" >Entertainment</option>
            <option value="sports" >Sports</option>
          </select>

          <label htmlFor="youtubelink">YoutubeLink:</label>
          <input type="text" id="youtubelink" value={news.youtubeLink} onChange={(e) => handleFormChange(e)} name="youtubeLink"/>

          <label htmlFor="facebooklink">FacebookLink:</label>
          <input type="text" id="facebooklink" value={news.facebookLink} onChange={(e) => handleFormChange(e)} name="facebookLink"/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
