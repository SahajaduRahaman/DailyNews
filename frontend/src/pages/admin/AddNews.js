import React, { useContext, useState } from "react";
import { AddNewsApi } from "../../fetchApi/FetchAPI";
import AuthContext from "../../context/ContextApi";

const AddNews = () => {
  const NewsContext = useContext(AuthContext)
  const setMyNews = NewsContext.setMyNews

  const [news, setNews] = useState({
    file: null,
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
    console.log(news)
    const formData = new FormData()
    formData.append("file", news.file);
    formData.append("title", news.title);
    formData.append("description", news.description);
    formData.append("category", news.category);
    formData.append("youtubeLink", news.youtubeLink);
    formData.append("facebookLink", news.facebookLink);


    AddNewsApi(formData).then((data) => {
      if (data.status === 200) {
        alert("news added successfully.")
        setMyNews({type: "addNews", payload: news})
        setNews({
          file: null,
          title: "",
          description: "",
          category: "",
          youtubeLink: "",
          facebookLink: "",
        })
      }
      else {
        alert(data.data.message)
      }
    });
  }

  return (
    <div className="addnews-container">
      <div className="addnews-box">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="file">File:</label>
          <input type="file" name='file' id="file" onChange={(e) => setNews({...news, [e.target.name] : e.target.files[0]})}/>

          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={news.title} onChange={(e) => handleFormChange(e)} name="title"/>

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
            <option value="others" >Others</option>
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
