import React, { useContext, useState } from "react";
import { UpdateNewsApi } from "../../fetchApi/FetchAPI";
import AuthContext from "../../context/ContextApi";
import DateAndTime from "../components/DateAndTime";
import ProPic from "../../assets/add.png"
import "../../styles/EditNews.css"
import WindowScroll from "../../rules/WindowScroll"
import DailyNewssample from "../../assets/DailyNewsSample.jpg"

const Editnews = ({ news, id, setVisible }) => {
    const NewsContext = useContext(AuthContext)
    const setMyNews = NewsContext.setMyNews

    const [updateNews, setUpdateNews] = useState({ ...news });

    const OnChangeNews = (e) => {
        setUpdateNews({ ...updateNews, [e.target.name]: e.target.value });
    };

    const UpdateNewsSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("file", updateNews.file);
        formData.append("title", updateNews.title);
        formData.append("description", updateNews.description);
        formData.append("category", updateNews.category);
        formData.append("youtubeLink", updateNews.youtubeLink);
        formData.append("facebookLink", updateNews.facebookLink);

        UpdateNewsApi(id, formData).then((data) => {
            if (data.status === 200) {
                alert("News updated successfully.")
                setMyNews({type: "editNews", payload: updateNews})
                setVisible(false)
                WindowScroll()
            } 
            else {
                alert("failed to fetch news.");
                console.log(data.data.message);
            }
        });
    };

    return (
        <>
            <div className="edit-news-container">
                <div className="edit-news-hide_box">
                    <form name="editnewsform" id="editnewsform" action="" onSubmit={(e) => UpdateNewsSubmit(e)}>
                        <div className="edit-news-cat">
                            <select name="category" id="category" value={updateNews ? updateNews.category : "politics"} onChange={(e) => OnChangeNews(e)} >
                                <option value="politics">Politics</option>
                                <option value="technology">Technology</option>
                                <option value="country">Country</option>
                                <option value="world">World</option>
                                <option value="business">Business</option>
                                <option value="education">Education</option>
                                <option value="career">Career</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="sports">Sports</option>
                                <option value="others" >Others</option>
                            </select>
                        </div>

                        <div className="edit-news-title">
                            <textarea type="text" id="title" name="title" value={updateNews ? updateNews.title : "This is edit news title."} onChange={(e) => OnChangeNews(e)} />
                        </div>

                        <div className='edit-news-cat-date'>
                            <span className='newsdetails_category'>{updateNews ? updateNews.reporterName : "Reporter"}</span>
                            <DateAndTime dot={updateNews ? updateNews.date : `${new Date().toISOString()}`} />
                        </div>
                        <div className='edit-news_picture'>
                            {updateNews ?
                                <img src={updateNews.file.secure_url ? updateNews.file.secure_url : URL.createObjectURL(updateNews.file)} alt="editFile" />
                            :
                                <img src={DailyNewssample} alt="DailyNewssample" />
                            }
                            <label htmlFor="file" className="trans">
                                <img src={ProPic} alt="addFileExamplePic"  style={{width:"300px", height:"300px"}}/>
                            </label>
                            <input type="file" name='file' id="file" onChange={(e) => setUpdateNews({...updateNews, [e.target.name] : e.target.files[0]})}/>
                        </div>

                        <div className="edit-news-links">
                            <div className="edit-link_i">
                                <i className="fa-brands fa-facebook"></i>
                                <input type="text" id="facebookLink" name="facebookLink" value={updateNews.facebookLink ? updateNews.facebookLink : "Please give a link"} onChange={(e) => OnChangeNews(e)} />
                            </div>
                            
                            <div className="edit-link_i">
                                <i className="fa-brands fa-youtube"></i>
                                <input type="text" id="youtubeLink" name="youtubeLink" value={updateNews.youtubeLink ? updateNews.youtubeLink : "Please give a link"} onChange={(e) => OnChangeNews(e)} />
                            </div>
                        </div>

                        <div className="desc">
                            <textarea name="description" id="description" cols="30" rows="10" value={updateNews.description ? updateNews.description : "This is news description."} onChange={(e) => OnChangeNews(e)} />
                        </div>

                        <div className="news-btn">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
  );
};

export default Editnews;
