import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/Hero.css"
import DateAndTime from './DateAndTime'
import DailyNewssample from "../../assets/DailyNewsSample.jpg"


const Hero = ({ politics, country, world, sports }) => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='box'>
                        <div className='img'>
                            {politics ?
                                <img src={politics.file ? politics.file.secure_url : DailyNewssample} alt={politics.title ? politics.title : "heroImg"}/>
                                :
                                <img src={DailyNewssample} alt="heroImg"/>
                            }
                        </div>

                        <div className='text'>
                            <span className='category'>{politics ? politics.category : "Category"}</span>
                            <Link to={politics ? `/newsdetails/${politics._id}` : "wait-for-loading"}>
                                <h1 className='titleBg'>{politics ? politics.title.slice(0, 60) : "Wait for loading"}...</h1>
                            </Link>
                            <div className='author flex'>
                                <span>by {politics ? politics.reporterName : "Loading..."}</span>
                                <DateAndTime dot={politics ? politics.date : `${new Date().toISOString()}`} />
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='img'>
                            {country ?
                                <img src={country.file ? country.file.secure_url : DailyNewssample} alt={country.title ? country.title : "heroImg"}/>
                                :
                                <img src={DailyNewssample} alt="heroImg"/>
                            }
                        </div>

                        <div className='text'>
                            <span className='category'>{country ? country.category : "Category"}</span>
                            <Link to={country ? `/newsdetails/${country._id}` : "wait-for-loading"}>
                                <h1 className='titleBg'>{country ? country.title.slice(0, 60) : "Wait for loading"}...</h1>
                            </Link>
                            <div className='author flex'>
                                <span>by {country ? country.reporterName : "Loading..."}</span>
                                <DateAndTime dot={country ? country.date : `${new Date().toISOString()}`} />
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='img'>
                            {world ?
                                <img src={world.file ? world.file.secure_url : DailyNewssample} alt={world.title ? world.title : "heroImg"}/>
                                :
                                <img src={DailyNewssample} alt="heroImg"/>
                            }
                        </div>

                        <div className='text'>
                            <span className='category'>{world ? world.category : "Category"}</span>
                            <Link to={world ? `/newsdetails/${world._id}` : "wait-for-loading"}>
                                <h1 className='titleBg'>{world ? world.title.slice(0, 60) : "Wait for loading"}...</h1>
                            </Link>
                            <div className='author flex'>
                                <span>by {world ? world.reporterName : "Loading..."}</span>
                                <DateAndTime dot={world ? world.date : `${new Date().toISOString()}`} />
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='img'>
                            {sports ?
                                <img src={sports.file ? sports.file.secure_url : DailyNewssample} alt={sports.title ? sports.title : "heroImg"}/>
                                :
                                <img src={DailyNewssample} alt="heroImg"/>
                            }
                        </div>

                        <div className='text'>
                            <span className='category'>{sports ? sports.category : "Category"}</span>
                            <Link to={sports ? `/newsdetails/${sports._id}` : "wait-for-loading"}>
                                <h1 className='titleBg'>{sports ? sports.title.slice(0, 60) : "Wait for loading"}...</h1>
                            </Link>
                            <div className='author flex'>
                                <span>by {sports ? sports.reporterName : "Loading..."}</span>
                                <DateAndTime dot={sports ? sports.date : `${new Date().toISOString()}`} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Hero