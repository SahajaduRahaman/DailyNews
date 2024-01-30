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
        <span>{day} {Month[month]} {year} </span>
        <span>{hour12}:{minute} {meridiem}</span>
      </>
    )
}

export default DateAndTime