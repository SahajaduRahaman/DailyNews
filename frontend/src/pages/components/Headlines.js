import React from 'react'
import Heading from './Heading'
import "../../styles/Headlines.css"
import { Link } from 'react-router-dom'

const Headlines = () => {

    const headLines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return (
        <>
            <Heading title='Letest Headlines' />
            <section className='headlines-container'>
                {headLines.map((idx) => { return (
                    <Link to={`/newsdetails/${idx}`} key={idx}>
                        <div className="headlines">
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsam!</h6>
                            <div className="date">
                                <i className='fas fa-calendar-days'></i>
                                <label>12 jan 2024</label>
                            </div>
                        </div>
                    </Link>
                )})}
            </section>
        </>
    )
}

export default Headlines