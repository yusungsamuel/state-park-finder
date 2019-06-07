import React, { Component } from "react"

export default class Marker extends Component {
    state = {
        info: {
            description: "Castle Mountains represents some of the most unique elements of the Mojave Desert. Nestled between the Nevada state line and Mojave National Preserve, the nearly 21,000 acres of Castle Mountains boasts Joshua tree forests, unbroken natural landscapes, rare desert grasslands, and rich human history. This intriguing area provides serenity and solitude from nearby metropolitan areas.",
            designation: "National Monument",
            directionsInfo: "You can approach Castle Mountains from Walking Box Ranch Road off of Nevada State Rd 164 (Nipton Road) or from several unnamed dirt roads off of Lanfair Road in Mojave National Preserve.",
            directionsUrl: "http://www.nps.gov/camo/planyourvisit/directions.htm",
            fullName: "Castle Mountains National Monument",
            latLong: "lat:35.29156348, long:-115.0935606",
            states: "CA",
            url: "https://www.nps.gov/camo/index.htm",
            weatherInfo:"Weather at Castle Mountains changes with the seasons. Freezing temperatures are expected in winter, with occasional snow. Spring brings mild warm days and cooler nights. With enough rain, wildflowers can carpet the area, making for spectacular displays. Summer months are much hotter, with temperatures nearing 100 degrees Fahrenheit. Strong monsoonal storms in late summer may cause flash-flooding in low-lying areas and can create hazardous road conditions. Fall is a cooler respite after the heat of summer."
        }
    }

    render() {
        return (
            <div><i class="fas fa-thumbtack"></i></div>
        )
    }
}