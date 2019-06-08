import React from "react"
import "./style.css"

export default function Jumbotron() {
    return (
        <div className="my-3 text-center jumbo jumbotron rounded jumbotron-fluid">
            <div className="container">
                <h1 className="jumbo-text display-4">California State Park Finder</h1>
                <p className="lead jumbo-subtext">Click on the pin to look at the park information or search for specific park using the search form</p>
            </div>
        </div>
    )
}