import React, { useContext, useEffect, useState } from "react";
import { AddNewsApi } from "../../fetchApi/FetchAPI";
import AuthContext from "../../context/ContextApi";
import "../../styles/AddNews.css"
import DailyNewssample from "../../assets/DailyNewsSample.jpg"
import Lottie from "lottie-react";
import AddNewsLtt from "../../assets/Added.json"

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

  const [ hidden, setHidden] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden("");
    }, 5000);
    return () => clearTimeout(timer);
}, [hidden]);

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
        setHidden(data.data.status);
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
        {hidden &&
          <div className='addnews_lottie'>
              <Lottie animationData={AddNewsLtt} loop={true} />
          </div>
        }
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="news-box">
            <div className="news-file_title_cat">
              <div className="file-box">
                <img src={news.file ? URL.createObjectURL(news.file) : DailyNewssample} alt="FilePic" />
                <label htmlFor="file">Choose File</label>
                <input type="file" name='file' id="file" onChange={(e) => setNews({...news, [e.target.name] : e.target.files[0]})} required/>
              </div>
              <div className="title_cat">
                <label htmlFor="title">News Title :</label>
                <input type="text" id="title" value={news.title} onChange={(e) => handleFormChange(e)} name="title" placeholder="Enter your news title..." required/>


                <label htmlFor="category">Select News Category :</label>
                <select name="category" id="category" value={news.category} onChange={(e) => handleFormChange(e)} required>
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
              <textarea type="text" id="description" value={news.description} onChange={(e) => handleFormChange(e)} name="description" rows="15" placeholder="Enter news description..." required/>
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
