import React from 'react'
import Sport from "../../assets/sports.jpeg"
import "../../styles/NewsCard.css"
import { Link } from 'react-router-dom'

const NewsCard = (props) => {

    const politicsNews = props.news

    return (
        <>
            {politicsNews.map((idx) => {
                return (
                    <div className='newsCard-box'>
                        <div className='newsCard-images'>
                            <div className='img'>
                                <img src={Sport} alt='' />
                            </div>
                            <div className='newsCard-category'>
                                <span>Sport</span>
                            </div>
                        </div>
                        <div className='newsCard-text'>
                            <Link to={`/newsdetails/${idx}`}>
                            <h1 className='newsCard-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, omnis!</h1>
                            <div className='newsCard-date'>
                                <i className='fas fa-calendar-days'></i>
                                <label> 22 jan 2024</label>
                            </div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default NewsCard