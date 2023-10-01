import React from "react";
import ApiRoute from "../utility/ApiRoute";
import API_BASIC from "../utility/ApiService";

class universiteService extends React.Component {
    constructor(props){
      
        super(props)
    }
      getUniversite () {
        return API_BASIC.get(ApiRoute.universites)
            .then(response => {
                const data = response?.data
                return data;
            });
    }

    postUniversite(data) {
        return API_BASIC.post(ApiRoute.universites, {
            nom: data.nom,
            telephone: data.telephone,
            email: data.email,
            adresse: data.adresse,
            abreviation: data.abreviation,
            date_creation: data.date_creation,
            ville_id: data.ville_id,
            president_nom: data.president_nom,
            president_prenom: data.president_prenom,
            logo: data.logo,
            logo_cover: data.logo_cover,
        }).then((response) => {
            console.log(response);
            const data = response?.data;
            return data;
        });
    }

}

export default new universiteService();