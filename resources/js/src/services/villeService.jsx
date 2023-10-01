import React from "react";
import ApiRoute from "../utility/ApiRoute";
import API_BASIC from "../utility/ApiService";

class villeService extends React.Component {
    constructor(props){
      
        super(props)
    }
      getVilles () {
        return API_BASIC.get(ApiRoute.villes)
            .then(response => {
                const data = response?.data
                return data;
            });
    }

}

export default new villeService();