import React, { Component } from "react"
import GoogleMapReact from 'google-map-react';
import API from "../utils/API"
import Marker from "../marker"
require("dotenv").config();
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
;

class Map extends Component {
    state = {
        center: {
            lat: 37.0902,
            lng: -95.7129
        },
        zoom: 5,
        data: []
    }

    componentDidMount () {
        API.AllForState().then(res => {
            console.log(res)
            let data = []
            res.data.data.forEach((item) => {
                if(item.latLong){
                    data.push(item)
                }
            })
            this.setState({
                data:data
            })
        })
    }

    render() {
        return (
            <div style={{ height: '50vh', width: '70%' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
            >
                    {this.state.data.map((park, i) =>{
                    let latLong = park.latLong.split(",")
                    
                    let lat = latLong[0].substr(4, latLong[0].length)
                    let long = latLong[1].substr(6, latLong[1].length)
                    return (
                        <Marker
                        key={i}
                        lat={lat}
                        lng={long}
                        data={park}
                        />
                    )
                })}
            </GoogleMapReact>
            </div>
        )
    }
}

export default Map;