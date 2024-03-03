import React, { useContext } from 'react'
import "../../styles/NewsCard.css"
import { Link } from 'react-router-dom'
import DateAndTime from './DateAndTime'
import AuthContext from '../../context/ContextApi'
import DailyNewssample from "../../assets/DailyNewsSample.jpg"


const NewsCard = (props) => {
    const authContext = useContext(AuthContext)
    const AuthToken = authContext.state.authToken
    const news = props.news
    const sampleNews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            {!news ?
                sampleNews.map((itm) => {
                    return (
                        <div className='newsCard-box' key={itm}>
                            <div className='newsCard-images'>
                                <div className='img'>
                                    <img src={DailyNewssample} alt="newspic"/>
                                </div>
                                <div className='newsCard-category'>
                                    <span>Loading...</span>
                                </div>
                            </div>
                            <div className='newsCard-text'>
                                <Link to="wait-for-loading">
                                    <h1 className='newsCard-title'>Wait for loading...</h1>
                                    <div className='newsCard-date'>
                                        <i className='fas fa-calendar-days'></i>
                                        <DateAndTime dot={`${new Date().toISOString()}`} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            :
            news.map((item) => {
                if (item) {
                    return (
                        <div className='newsCard-box' key={item._id}>
                            <div className='newsCard-images'>
                                <div className='img'>
                                    {item.file ?
                                        <img src={item.file.secure_url ? item.file.secure_url : DailyNewssample} alt={item.title}/>
                                    :
                                        <img src={DailyNewssample} alt="newspic"/>
                                    }
                                </div>
                                <div className='newsCard-category'>
                                    <span>{item.category ? item.category : "Loading..."}</span>
                                </div>
                            </div>
                            <div className='newsCard-text'>
                                <Link to={AuthToken ? `/adminnewsdetails/${item._id}` : `/newsdetails/${item._id}`}>
                                <h1 className='newsCard-title'>{item.title ? item.title.slice(0, 80) : "Wait for loading..."}</h1>
                                <div className='newsCard-date'>
                                    <i className='fas fa-calendar-days'></i>
                                    <DateAndTime dot={item.date ? item.date : `${new Date().toISOString()}`} />
                                </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className='newsCard-box' key={Date.now()}>
                        <div className='newsCard-images'>
                            <div className='img'>
                                <img src={DailyNewssample} alt="newspic"/>
                            </div>
                            <div className='newsCard-category'>
                                <span>Loading...</span>
                            </div>
                        </div>
                        <div className='newsCard-text'>
                            <Link to="wait-for-loading">
                                <h1 className='newsCard-title'>Wait for loading...</h1>
                                <div className='newsCard-date'>
                                    <i className='fas fa-calendar-days'></i>
                                    <DateAndTime dot={`${new Date().toISOString()}`} />
                                </div>
                            </Link>
                        </div>
                    </div>
                )})
            }
        </>
    )
}

export default NewsCard