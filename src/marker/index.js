import React, { Component } from "react"
import Modal from "../modal"

export default class Marker extends Component {
    state = {
        info: {
            description: this.props.data.description,
            designation: this.props.data.designation,
            directionsInfo: this.props.data.directionsInfo,
            directionsUrl: this.props.data.directionsUrl,
            fullName: this.props.data.fullName,
            states: this.props.data.states,
            url: this.props.data.url,
            weatherInfo:this.props.data.weatherInfo
        }
    }

    

    render() {
        return (
            
            <div onClick={()=>{this.props.onClick(this.state.info)}} data-toggle="modal" data-target="#parkInfo"><i className="fas fa-thumbtack"></i></div>
            
        )
    }
}