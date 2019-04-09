import React from 'react';
import './Header.scss';
import logo from './../logo.png';

const Header = () => {
    return (
        <header className="Header">
            <a href="/">
                <img src={logo} className="Header-Logo" alt="logo telecine play" />
            </a>
        </header>
    );
}

export default Header;