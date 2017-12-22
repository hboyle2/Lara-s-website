import React, { Component } from 'react';
import Navbar from './navbar'
class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>this is the homepage</div>
      </div>
    );
  }
}

export default HomePage;