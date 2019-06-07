import React, { Component } from "react"
import GoogleMapReact from 'google-map-react';
require("dotenv").config();
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends Component {
    state = {
        center: {
            lat: 37.0902,
            lng: -95.7129
        }
    }

    render() {
        return (
            <div style={{ height: '50vh', width: '70%' }}>
                            {console.log(API_KEY)}

            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={this.state.center}
                defaultZoom={5}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
            </div>
        )
    }
}

export default Map;