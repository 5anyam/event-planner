import React from 'react'
import './Searchresult.css'

function Searchresult({
    img,
    location,
    title,
    description,
    star,
    price,
}) {
    return (
        <div className="searchresults">
            <img src={img} alt="" height="100px" width="100px"/>

        <div className="searchresult__info">
            <h1>{title}</h1>
            <p>{location}</p>
            <p>{description}</p>
        </div>
        <div className="searchresult__infobot">

        </div>
        </div>
    )
}

export default Searchresult
