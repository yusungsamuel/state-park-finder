import React, { Component } from "react"

export default class Marker extends Component {
    state = {
        info: {
            description: this.props.data.description,
            designation: this.props.data.designation,
            directionsInfo: this.props.data.directionsInfo,
            directionsUrl: this.props.data.directionsUrl,
            fullName: this.props.data.fullName,
            lat: this.props.lat,
            lng: this.props.lng,
            states: this.props.data.state,
            url: this.props.data.url,
            weatherInfo:this.props.data.weatherInfo
        }
    }

    render() {
        return (
            <div><i className="fas fa-thumbtack"></i></div>
        )
    }
}