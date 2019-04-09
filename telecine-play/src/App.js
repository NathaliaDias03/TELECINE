import React, { Component } from 'react';
import Header from './UI/Header';

import "bootstrap/scss/bootstrap.scss";
import './index.scss';
import './App.css';
// require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
