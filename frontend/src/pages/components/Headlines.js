import React from 'react'
import Heading from './Heading'
import "../../styles/Headlines.css"
import { Link } from 'react-router-dom'
import DateAndTime from './DateAndTime'

const Headlines = (props) => {
    const allNews = props.news
    const len = props.len
    const sideNews = allNews.slice(0, len)

    return (
        <>
            <Heading title={props.title ? props.title : 'Letest Headlines'}/>
            <section className='headlines-container' >
                {sideNews.map((item) => {
                    return (
                        <Link to={`/newsdetails/${item._id}`} key={item._id} >
                            <div className="headlines">
                                <p>{item.title.slice(0, 100)}...</p>
                                <div className="date">
                                    <i className='fas fa-calendar-days'></i>
                                    <DateAndTime dot={item.date} />
                                </div>
                            </div>
                        </Link>
                    )})
                }
            </section>
        </>
    )
}

export default Headlines