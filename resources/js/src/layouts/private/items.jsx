import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import constant from "../../utility/constant"

const Navdata = () => {
    let navigate = useNavigate();

    const appConstant = {...constant}
    const role = {...appConstant?.appRole}
    const menuItems = [
        {
            id: "dashboard",
            label: "Tableau de bord",
            icon: "ri-pie-chart-2-fill",
            link: "/admin/tableau-de-bord",
            permissions:['all']
        },
        {
            id:'universites',
            icon :'ri-hotel-fill',
            label:'Universités',
            link:'/admin/université/accueil',
            permissions:['all']
        },
        {
            id:'caise',
            icon :'ri-wallet-3-fill',
            label:'La caise',
            link:'#',
            permissions:['all']
        },
        {
            id:'parametre',
            icon :'bx bx-wrench',
            label:'Paramètre',
            link:'#',
            permissions:['all']
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;