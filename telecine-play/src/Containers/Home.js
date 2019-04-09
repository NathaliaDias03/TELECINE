import React, { Component } from 'react';
import HomeText from '../UI/HomeText';
import Carousel from '../UI/Carousel';
import Dispositivos from '../UI/Dispositivos';

// require('bootstrap');

class Home extends Component {
  render() {
    return (
        <div>
          <HomeText></HomeText>
          <div className="container half-grey-bg">
            <Carousel></Carousel>
          </div>
          <div className="container grey-bg">
            <Dispositivos></Dispositivos>
          </div>
        </div>
    );
  }
}

export default Home;
