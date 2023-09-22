import React from "react";
import ApiRoute from "../utility/ApiRoute";
import API_BASIC from "../utility/ApiService";
import { delUserData, saveUserData } from "../utility/Utils";
import { useNavigate } from "react-router";

class AuthService extends React.Component {
    constructor(props) {
        super(props);
    }
   
    login(email, password) {
        console.log(email);
        return API_BASIC.post(ApiRoute.connexion, {
            email,
            password,
        }).then((response) => {
            const data = response?.data;
            console.log("responseAuth->", response);
            if (data?.data?.access_token) {
                saveUserData(JSON.stringify(data.data));
            }
            return data;
        });
    }
    updateProfil(data) {
        return API_BASIC.patch(ApiRoute.userProfil + "/" + data.id, {
            id: data.id,
            nom: data.nom,
            email: data.email,
            telephone: data.telephone,
        }).then((response) => {
            const data = response?.data.data;

            return data;
        });
    }

    logout() {
        delUserData();
        window.location.reload();
    }
}

export default new AuthService();
