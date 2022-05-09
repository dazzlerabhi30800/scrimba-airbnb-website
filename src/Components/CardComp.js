import React from 'react';
import './Card.css';
import StarImg from './images/star.png'

function CardComp(props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="card-img">
                <img src={`./images/${props.img}`} alt="" />
                {badgeText && <span className='status'>{badgeText}</span>}
            </div>
            <div className="rating-wrapper">
                <img src={StarImg} alt="" />
                <p className="rating">{props.rating}</p>
                <span className="person">{props.reviewCount}</span>
                <div className="rectangle"></div>
                <div className="country">{props.location}</div>
            </div>
            <div className="description-wrapper">
                <h2 className="title">{props.title}</h2>
                <p className="price">From ${props.price} <span className="quantity"> / person</span></p>
            </div>
        </div>
    )
}

export default CardComp;