import React from 'react';
// import AthleteImg from './images/katie-zaferes.png'
import CardComp from './CardComp'
import './Card.css'
import data from './data';



function Card(props) {
    const cardComp = data.map((item, index) => {
        return (
            <CardComp
                key={item.id}
                // item={item}
                {...item}
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