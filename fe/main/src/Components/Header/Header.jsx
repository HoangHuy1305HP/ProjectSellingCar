import React from 'react';

import Navbar from '../NavBar';
import './Header.css';
const Header = ( {title, description}) => {
    return (
        <header className="header">
            <Navbar></Navbar>
            
                <h1>{title}</h1>
                <p>{description}</p>
            
        </header>
    );
}

export default Header;
