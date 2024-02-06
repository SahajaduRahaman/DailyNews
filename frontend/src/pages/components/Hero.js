import React from 'react'
import NewsPhoto from "../../assets/sports.jpeg"
import { Link } from "react-router-dom"
import "../../styles/Hero.css"
import DateAndTime from './DateAndTime'


const Hero = ({ sports, world, country, entertainment }) => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
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
                                    <span>by Raja Rahaman</span>
                                    <DateAndTime dot={sports.date} />
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
                                    <span>by Raja Rahaman</span>
                                    <DateAndTime dot={world.date} />
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
                                    <span>by Raja Rahaman</span>
                                    <DateAndTime dot={country.date} />
                                </div>
                            </div>
                        </div>
                    }

                    {entertainment &&
                        <div className='box'>
                            <div className='img'>
                                <img src={NewsPhoto} alt='' />
                            </div>

                            <div className='text'>
                                <span className='category'>{entertainment.category}</span>
                                <Link to={`/newsdetails/${entertainment._id}`}>
                                    <h1 className='titleBg'>{entertainment.title.slice(0, 80)}</h1>
                                </Link>
                                <div className='author flex'>
                                    <span>by Raja Rahaman</span>
                                    <DateAndTime dot={entertainment.date} />
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