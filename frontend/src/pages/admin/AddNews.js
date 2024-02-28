import React, { useContext, useState } from "react";
import { AddNewsApi } from "../../fetchApi/FetchAPI";
import AuthContext from "../../context/ContextApi";
import "../../styles/AddNews.css"
import FilePic from "../../assets/profile-logo.png"

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
          <div className="news-box">
            <div className="news-file_title_cat">
              <div className="file-box">
                <img src={news.file ? URL.createObjectURL(news.file) : FilePic} alt="FilePic" style={{width : "250px", height : "250px", borderRadius : "8px"}}/>
                <label htmlFor="file">Choose File</label>
                <input type="file" name='file' id="file" onChange={(e) => setNews({...news, [e.target.name] : e.target.files[0]})}/>
              </div>
              <div className="title_cat">
                <label htmlFor="title">News Title :</label>
                <input type="text" id="title" value={news.title} onChange={(e) => handleFormChange(e)} name="title" placeholder="Enter your news title..."/>


                <label htmlFor="category">Select News Category :</label>
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
                <input type="text" id="youtubelink" value={news.youtubeLink} onChange={(e) =>   handleFormChange(e)} name="youtubeLink" placeholder="Enter YoutubeLink..."/>

                <label htmlFor="facebooklink">FacebookLink:</label>
                <input type="text" id="facebooklink" value={news.facebookLink} onChange={(e) => handleFormChange(e)} name="facebookLink" placeholder="Enter FacebookLink..."/>

              </div>
            </div>

            <div className="desc">
              <label htmlFor="description">Description:</label>
              <textarea type="text" id="description" value={news.description} onChange={(e) => handleFormChange(e)} name="description" rows="15" placeholder="Enter news description..."/>
            </div>

            <div className="news-btn">
              <input type="submit" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
