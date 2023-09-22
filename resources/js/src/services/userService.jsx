import React from "react";
import ApiRoute from "../utility/ApiRoute";
import API_BASIC from "../utility/ApiService";

class userService extends React.Component {
    constructor(props){
      
        super(props)
    }
      getUser () {
        return API_BASIC.get(ApiRoute.users)
            .then(response => {
                console.log(response);
                const data = response?.data?.data?.users
            
                return data;
            });
    }
      getUserRci (id) {
        console.log(id);
        return API_BASIC.get(ApiRoute.users+'/'+id,{id:id})
            .then(response => {
                console.log(response);
                const data = response?.data?.data?.users
            
                return data;
            });
    }

      postUser (data) {
        return API_BASIC.post(ApiRoute.users, {
            nom: data.nom,
            prenom: data.prenom,
            telephone: data.telephone,
            email:data.email,
            role:data.role,
            faitiere_id:data.faitiere_id,
            photo: data.photo,
            })
            .then(response => {

                console.log('response', response);
                const data = response?.data
                return data;
            });
    }
    patchUser(data) {
        return API_BASIC.patch(ApiRoute.users+'/'+data.id, {
            id: data?.id,
            nom: data.nom,
            prenom: data.prenom,
            telephone: data.telephone,
            email:data.email,
            role:data.role,
            photo: data.photo,
            faitiere_id:data?.faitiere_id
            })
            .then(response => {
                console.log('response',response);
                const data = response?.data
                return data;
            });
    }
    editPassword(form) {
        return API_BASIC.patch(ApiRoute.updatepassword+'/'+form?.data?.id, {
            id:form?.data?.id,
            current_password: form?.formInputPass?.oldpassword,
            new_password: form?.formInputPass?.newpassword,
            new_password_confirmation: form?.formInputPass?.confirmationpassword,
        
    
            })
            .then(response => {
                console.log('response',response);
                const data = response?.data
                return data;
            });
    }
    deleteUser(id) {
        return API_BASIC.delete(ApiRoute.users+'/'+id, {
            id:id,
            })
            .then(response => {
                const data = response?.data
                console.log(data)
                return data;
            });
    }

    getProfilUpdate(data) {
        return API_BASIC.patch(ApiRoute.profiltUpdate, {
            id: data?.id,
            nom: data?.nom,
            prenom: data?.prenom,
            telephone: data?.telephone,
            email:data?.email,
            })
            .then(response => {
                
                const data = response?.data
                return data;
            });
    }
  

}

export default new userService();