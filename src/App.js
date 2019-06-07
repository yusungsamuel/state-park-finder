import React, { Component } from 'react';
import './App.css';
import Map from "./map"
import Modal from "./modal"

class App extends Component {
  state = {}

  render() {
    return (
      <div>
      <Map></Map>
      <Modal/>
      </div>
    );
  }
}

export default App;
