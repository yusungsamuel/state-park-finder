import React, { Component } from 'react';
import './App.css';
import Map from "./map"
import Jumbotron from "./jumbotron"

class App extends Component {
  state = {
    currentParkInfo: {}
  }

  // handlePinClick = (event) => {
  //   event.preventDefault()
  //   let parkCode = event.target.getAttribute("data-parkcode")
  //   API.GetOnePark(parkCode)
  //     .then(res => {
  //       this.setState({
  //         currentParkInfo: res.data.data
  //       })
  //     })

  // }

  render() {
    return (
      <div className="container">
        <Jumbotron/>
        <Map></Map>
      </div>
    );
  }
}

export default App;
