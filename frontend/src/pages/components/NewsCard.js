import React from 'react'
import Sport from "../../assets/sports.jpeg"
import "../../styles/NewsCard.css"
import { Link } from 'react-router-dom'
import DateAndTime from './DateAndTime'

const NewsCard = (props) => {

    const news = props.news

    return (
        <>
            {news.map((item) => {
                return (
                    <div className='newsCard-box' key={item._id}>
                        <div className='newsCard-images'>
                            <div className='img'>
                                {item.file ? <img src={item.file.secure_url} alt={item.title}/> : <img src={Sport} alt={item.title}/>}
                            </div>
                            <div className='newsCard-category'>
                                <span>{item.category}</span>
                            </div>
                        </div>
                        <div className='newsCard-text'>
                            <Link to={`/newsdetails/${item._id}`}>
                            <h1 className='newsCard-title'>{item.title.slice(0, 80)}</h1>
                            <div className='newsCard-date'>
                                <i className='fas fa-calendar-days'></i>
                                <DateAndTime dot={item.date} />
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