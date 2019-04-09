import React from 'react';
import './Header.scss';
import logo from './../logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
              <button className="btn btn-primary btn-lg">
                Erradu
              </button>
          </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
          </a>
        </header>
    );
}

export default Header;