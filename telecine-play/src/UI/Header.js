import React from 'react';
import './Header.scss';
import logo from './../logo.png';

const Header = () => {
    return (
        <header className="Header">
            <img src={logo} className="Header-Logo" alt="logo telecine play" />
        </header>
    );
}

export default Header;