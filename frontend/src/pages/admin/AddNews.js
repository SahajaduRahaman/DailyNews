import React, { useContext, useState } from "react";
import { AddNewsApi } from "../../fetchApi/FetchAPI";
import AuthContext from "../../context/ContextApi";

const AddNews = () => {
  const NewsContext = useContext(AuthContext)
  const setMyNews = NewsContext.setMyNews

  const [news, setNews] = useState({
    title: "",
    description: "",
    category: "politics",
    youtubeLink: "",
    facebookLink: "",
  });

  const handleFormChange = (e) => {
    setNews({...news, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("title", news.title);
    formData.append("description", news.description);
    formData.append("category", news.category);
    formData.append("youtubeLink", news.youtubeLink);
    formData.append("facebookLink", news.facebookLink);
    formData.append("file", news.file);

    AddNewsApi(formData).then((data) => {
      if (data.status === 200) {
        alert("news added successfully.")
        setMyNews({type: "addNews", payload: news})
        setNews({
          title: "",
          description: "",
          category: "politics",
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
          <input type="text" id="title" defaultValue={news.title} onChange={(e) => handleFormChange(e)} name="title"/>

          <label htmlFor="description">Description:</label>
          <input type="text" id="description" defaultValue={news.description} onChange={(e) => handleFormChange(e)} name="description"/>

          <label htmlFor="category">Category:</label>
          <select name="category" id="category" defaultValue={news.category} onChange={(e) => handleFormChange(e)}>
            <option defaultValue="politics" >Politics</option>
            <option defaultValue="technology" >Technology</option>
            <option defaultValue="country" >Country</option>
            <option defaultValue="world" >World</option>
            <option defaultValue="business" >Business</option>
            <option defaultValue="education" >Education</option>
            <option defaultValue="career" >Career</option>
            <option defaultValue="entertainment" >Entertainment</option>
            <option defaultValue="sports" >Sports</option>
            <option defaultValue="others" >Others</option>
          </select>

          <label htmlFor="youtubelink">YoutubeLink:</label>
          <input type="text" id="youtubelink" defaultValue={news.youtubeLink} onChange={(e) => handleFormChange(e)} name="youtubeLink"/>

          <label htmlFor="facebooklink">FacebookLink:</label>
          <input type="text" id="facebooklink" defaultValue={news.facebookLink} onChange={(e) => handleFormChange(e)} name="facebookLink"/>

          <input type="submit" defaultValue="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
