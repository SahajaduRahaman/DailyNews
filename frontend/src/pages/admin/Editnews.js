import React, { useContext, useState } from "react";
import { UpdateNewsApi } from "../../fetchApi/FetchAPI";
import AuthContext from "../../context/ContextApi";

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
                <form name="editnewsform" id="editnewsform" action="" onSubmit={(e) => UpdateNewsSubmit(e)}>
                    <fieldset>
                        <legend>Edit News</legend>
                        <label htmlFor="file">File:</label>
                        <input type="file" name='file' id="file" onChange={(e) => setUpdateNews({...updateNews, [e.target.name] : e.target.files[0]})}/>

                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={updateNews.title} onChange={(e) => OnChangeNews(e)} />
                        <br />
                        <br />

                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="10" value={updateNews.description} onChange={(e) => OnChangeNews(e)} />
                        <br />
                        <br />

                        <label htmlFor="category">Category:</label>
                        <select name="category" id="category" value={updateNews.category} onChange={(e) => OnChangeNews(e)} >
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
                        <br />
                        <br />

                        <label htmlFor="youtubeLink">YoutubeLink</label>
                        <input type="text" id="youtubeLink" name="youtubeLink" value={updateNews.youtubeLink} onChange={(e) => OnChangeNews(e)} />
                        <br />
                        <br />

                        <label htmlFor="facebookLink">FacebookLink</label>
                        <input type="text" id="facebookLink" name="facebookLink" value={updateNews.facebookLink} onChange={(e) => OnChangeNews(e)} />

                        <input type="submit" value="Submit" />
                    </fieldset>
                </form>
            </div>
        </>
  );
};

export default Editnews;
