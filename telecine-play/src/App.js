import React, { Component } from 'react';
import './index.scss';
import Header from './UI/Header';
import Footer from './UI/Footer';
import Home from './UI/Home'
import Carousel from './UI/Carousel';
import "bootstrap/scss/bootstrap.scss";
// require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <Home></Home>
          <Carousel></Carousel>
          
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
