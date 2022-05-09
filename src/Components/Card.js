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
                key={index}
                title={item.title}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                price={item.price}
            />
        )
    })
    return (
        <div className='card-container'>
           {/* <CardComp img="./images/katie-zaferes.png" rating={5.0} reviewCount={6} country="USA" title="Life lessions with Katie Zaferes" price={136} />  */}
           {/* <CardComp img="./images/wedding.png" rating={5.0} reviewCount={30} country="USA" title="Learn Wedding Photography" price={125} />  */}
           {/* <CardComp img="./images/mountain-bike.png" rating={4.8} reviewCount={2} country="USA" title="Group Mountain Bike" price={50} />  */}
           {cardComp}
        </div>
    )
}

export default Card