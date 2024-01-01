
import React from "react"

import star from "../images/star-icon.png"
import wedding from "../images/wedding.png"

export default function Card(props){

    let badgeText
    if (props.content.openSpots === 0)
        badgeText = "SOLD OUT"
    else if (props.content.location === "Online")
        badgeText = "ONLINE"
    return (
        <section className="card--section">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={wedding} alt="content pic" />
            <div className="card--stats">
                <img className="card--star--icon" src={star} alt="star icon" />
                <span>{props.content.stats.rating}</span>
                <span className="gray"> ({props.content.stats.reviewCount}) .</span>
                <span className="gray">{props.content.location}</span>
            </div>
            <p className="card--title">{props.content.title}</p>
            <p><span className="bold">From ${props.content.price}</span> / person</p>
        </section>
    )
}