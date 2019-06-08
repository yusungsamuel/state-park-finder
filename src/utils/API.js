import axios from "axios"
require("dotenv").config();
const API_KEY = process.env.REACT_APP_NATIONAL_PARK_API_KEY

export default {
    AllForState: function (){
        return axios.get("https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=" + API_KEY)
    },
    SearchByName: function(name) {
        return axios.get("https://developer.nps.gov/api/v1/parks?q=" + name + "&stateCode=CA&api_key=" + API_KEY)
    }
}