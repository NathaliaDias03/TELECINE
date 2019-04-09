import React, { Component } from 'react';
import './index.scss';
import Header from './UI/Header';
import Footer from './UI/Footer';
import Home from './UI/Home'
import Carousel from './UI/Carousel';
import Dispositivos from './UI/Dispositivos';
import "bootstrap/scss/bootstrap.scss";
// require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>

        <Home></Home>
        <div className="container half-grey-bg">
          <Carousel></Carousel>
        </div>
        <div className="container grey-bg">
          <Dispositivos></Dispositivos>
        </div>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
