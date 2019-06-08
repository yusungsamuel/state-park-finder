import axios from "axios"

export default {
    AllForState: function (){
        return axios.get("https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=IwstjEqFIBTvBVTSG4dBrfRba1qVHNugp0eMtVxA")
    },
    SearchByName: function(name) {
        return axios.get("https://developer.nps.gov/api/v1/parks?q=" + name + "&stateCode=CA&api_key=IwstjEqFIBTvBVTSG4dBrfRba1qVHNugp0eMtVxA")
    }
}