import React from 'react'
import NewsPhoto from "../../assets/sports.jpeg"
import { Link } from "react-router-dom"
import "../../styles/Hero.css"


const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='box'>
                    <div className='img'>
                        <img src={NewsPhoto} alt='' />
                    </div>

                    <div className='text'>
                        <span className='category'>Sports</span>
                        <Link to="/jhg">
                            <h1 className='titleBg'>Google To Boost Android Security In Few Days</h1>
                        </Link>
                        <div className='author flex'>
                            <span>by Raja Rahaman</span>
                            <span>23 jan 2024</span>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='img'>
                        <img src={NewsPhoto} alt='' />
                    </div>

                    <div className='text'>
                        <span className='category'>World</span>
                        <Link to="/ghfgf">
                            <h1 className='titleBg'>More than billion football fans attend Brazil world cup</h1>
                        </Link>
                        <div className='author flex'>
                            <span>by Raja Rahaman</span>
                            <span>23 jan 2024</span>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='img'>
                        <img src={NewsPhoto} alt='' />
                    </div>

                    <div className='text'>
                        <span className='category'>Country</span>
                        <Link to="/kiyuty">
                            <h1 className='titleBg'>No escaping new high tech speed cameras</h1>
                        </Link>
                        <div className='author flex'>
                            <span>by Raja Rahaman</span>
                            <span>23 jan 2024</span>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='img'>
                        <img src={NewsPhoto} alt='' />
                    </div>

                    <div className='text'>
                        <span className='category'>Entertainment</span>
                        <Link to="/ftdsese">
                            <h1 className='titleBg'>Emma Watson stands up for Turkish women</h1>
                        </Link>
                        <div className='author flex'>
                            <span>by Raja Rahaman</span>
                            <span>23 jan 2024</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Hero