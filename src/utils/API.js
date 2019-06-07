import axios from "axios"

export default {
    AllForState: function (){
        return axios.get("https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=IwstjEqFIBTvBVTSG4dBrfRba1qVHNugp0eMtVxA")
    },
    GetOnePark: function (data){
        return axios.get("https://developer.nps.gov/api/v1/parks?parkCode=" + data +"&api_key=IwstjEqFIBTvBVTSG4dBrfRba1qVHNugp0eMtVxA")
    }

}