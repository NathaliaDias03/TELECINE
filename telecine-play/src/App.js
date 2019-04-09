import React, { Component } from 'react';
import "bootstrap/scss/bootstrap.scss";
import Header from './UI/Header';
import Footer from './UI/Footer';
// require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
          {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
