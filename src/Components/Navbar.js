import React from 'react';
import NavbarLogo from './images/airbnb-logo.png'
import './Navbar.css';

function Navbar() {
    return(
            <nav className='nav-bar'>
                <div className="navbar-logo">
                <img src={NavbarLogo} alt="" /> 
                </div>
            </nav>
    )
}

export default Navbar;