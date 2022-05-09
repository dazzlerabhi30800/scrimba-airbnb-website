import React from 'react';
import HeroImg from './images/photo-grid.png';
import './Navbar.css';

function HeroSection() {
    return(
        <section className="main">
            <div className="hero-img">
                <img src={HeroImg} alt="" />
            </div>
            <div className="text-wrapper">
                <h1 className="heading font-bold text-3xl">Online Experiences</h1>
                <p className='my-2 font-thin'>
                    Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </section>
    )
}

export default HeroSection;