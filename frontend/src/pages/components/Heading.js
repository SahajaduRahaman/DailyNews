import React from "react"
import "../../styles/Heading.css"

const Heading = ({ title }) => {
    return (
        <>
            <div className='heading' key={Date.now()}>
                <h6>{title ? title : "Loading..."}</h6>
            </div>
        </>
    )
}

export default Heading
