import React from "react"
import "./style.css"

export default function Jumbotron() {
    return (
        <div className="jumbo jumbotron jumbotron-fluid">
            <div className="text-wrapper container">
                <h1 className="display-4">California State Park Finder</h1>
                <p className="lead">Click on the pin to look at the park information or search for specific park using the search form</p>
            </div>
        </div>
    )
}