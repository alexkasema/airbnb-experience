
import React from "react"


import star from "../images/star-icon.png"


export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img} alt="contacts"/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={star} alt="star" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={star} alt="star" />
                <p>{email}</p>
            </div>
        </div>
    )
}