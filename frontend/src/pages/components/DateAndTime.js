import React from 'react'

const Month = ["Jan", "Feb", "March", "Aprl", "May", "June", "Jully", "Aug", "Sep", "Oct", "Nov", "Dec"]

const DateAndTime = ({dot}) => {
    const DOT = new Date(dot)

    const day = DOT.getDate();
    const month = DOT.getMonth();
    const year = DOT.getFullYear();

    const hour = DOT.getHours();
    const hour12 = (hour % 12) || 12;
    const minute = DOT.getMinutes();
    const meridiem = hour >= 12 ? "PM" : "AM";

    return (
      <>
        <span className='date_time'>{day ? day : "00"} {Month[month] ? Month[month] : "00"} {year ? year : "0000"} {hour12 ? hour12 : "00"}:{minute ? minute : "00"} {meridiem ? meridiem : "O"}</span>
      </>
    )
}

export default DateAndTime 