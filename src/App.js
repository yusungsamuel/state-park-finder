import React, { Component } from 'react';
import './App.css';
import Map from "./map"

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
        {console.log(this.state.currentParkInfo)}
        <Map></Map>
      </div>
    );
  }
}

export default App;
