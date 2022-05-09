import React from 'react';
// import AthleteImg from './images/katie-zaferes.png'
import CardComp from './CardComp'
import './Card.css'
import data from './data';



function Card(props) {
    const cardComp = data.map((item, index) => {
        return (
            <CardComp
                img={item.coverImg} 
                // key={index}
                key={item.id}
                title={item.title}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })
    return (
        <div className='card-container'>
           {cardComp}
        </div>
    )
}

export default Card