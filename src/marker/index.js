import React, { Component } from "react"
import "./style.css"

export default class Marker extends Component {
    state = {
        info: {
            description: this.props.data.description,
            designation: this.props.data.designation,
            "directions Info": this.props.data.directionsInfo,
            "directions Url": this.props.data.directionsUrl,
            fullName: this.props.data.fullName,
            states: this.props.data.states,
            url: this.props.data.url,
            "weather Info":this.props.data.weatherInfo
        }
    }

    

    render() {
        return (
            
            <div className="icon" onClick={()=>{this.props.onClick(this.state.info)}} data-toggle="modal" data-target="#parkInfo"><i className="fas fa-thumbtack fa-lg"></i></div>
            
        )
    }
}