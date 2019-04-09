import React from 'react';
import './Footer.scss';
import logo from './../logo.png';

const Footer = () => {
    return (
        <footer className="Footer page-footer mx-auto fixed-bottom">
            <img src={logo} className="Footer-Logo" alt="logo telecine play" />
            <p>
                Ficou com alguma dúvida?
            </p>
            <p className="text-gray">
                ACESSE NOSSA AJUDA
            </p>
        </footer>
    );
}

export default Footer;
