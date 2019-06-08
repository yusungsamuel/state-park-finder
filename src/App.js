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
      <div>
      <div className="container">
      <Jumbotron/>
        <Map></Map>
      </div>
      </div>
    );
  }
}

export default App;
