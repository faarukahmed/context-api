import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-container'>
            <h1>Crypto Cafe</h1>
            <nav>
                <Link to = "/home">Home</Link>
                <Link to = "/coins">Coins</Link>
                <Link to = "/contact">Contact</Link>
                <Link to ="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;