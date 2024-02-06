import React from 'react'
import NewsPhoto from "../../assets/sports.jpeg"
import { Link } from "react-router-dom"
import "../../styles/Hero.css"
import DateAndTime from './DateAndTime'


const Hero = ({ politics, country, world, sports }) => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    {politics &&
                        <div className='box'>
                            <div className='img'>
                                <img src={NewsPhoto} alt='' />
                            </div>

                            <div className='text'>
                                <span className='category'>{politics.category}</span>
                                <Link to={`/newsdetails/${politics._id}`}>
                                    <h1 className='titleBg'>{politics.title.slice(0, 80)}</h1>
                                </Link>
                                <div className='author flex'>
                                    <span>by {politics.reporterName}</span>
                                    <DateAndTime dot={politics.date} />
                                </div>
                            </div>
                        </div>
                    }

                    {country &&
                        <div className='box'>
                            <div className='img'>
                                <img src={NewsPhoto} alt='' />
                            </div>

                            <div className='text'>
                                <span className='category'>{country.category}</span>
                                <Link to={`/newsdetails/${country._id}`}>
                                    <h1 className='titleBg'>{country.title.slice(0, 80)}</h1>
                                </Link>
                                <div className='author flex'>
                                    <span>by {country.reporterName}</span>
                                    <DateAndTime dot={country.date} />
                                </div>
                            </div>
                        </div>
                    }

                    {world &&
                        <div className='box'>
                            <div className='img'>
                                <img src={NewsPhoto} alt='' />
                            </div>

                            <div className='text'>
                                <span className='category'>{world.category}</span>
                                <Link to={`/newsdetails/${world._id}`}>
                                    <h1 className='titleBg'>{world.title.slice(0, 80)}</h1>
                                </Link>
                                <div className='author flex'>
                                    <span>by {world.reporterName}</span>
                                    <DateAndTime dot={world.date} />
                                </div>
                            </div>
                        </div>
                    }

                    {sports &&
                        <div className='box'>
                            <div className='img'>
                                <img src={NewsPhoto} alt='' />
                            </div>

                            <div className='text'>
                                <span className='category'>{sports.category}</span>
                                <Link to={`/newsdetails/${sports._id}`}>
                                    <h1 className='titleBg'>{sports.title.slice(0, 80)}</h1>
                                </Link>
                                <div className='author flex'>
                                    <span>by {sports.reporterName}</span>
                                    <DateAndTime dot={sports.date} />
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>
            </section>
        </>
    )
}

export default Hero