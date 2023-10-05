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
            icon: "bx bxs-dashboard",
            link: "/admin/tableau-de-bord",
            permissions:['all']
        },
        {
            id:'universite',
            icon :'ri-building-fill ',
            label:'Université',
            link:'/admin/université/accueil',
            permissions:['all'],
            subItems: [
                    { 
                    id: "accueil",
                        label: "Accueil",
                        link: "#",
                        parentId: "universite",
                        permissions:['all'],
                    },
                    {
                        id:'departements',
                        label:'Departements',
                        parentId: "universite",
                        link:'#',
                        permissions:['all']
                      },
                    { 
                        id: "filiere", 
                        label: "Filières", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    },
                    { 
                        id: "licence", 
                        label: "Licences", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    },
                    { 
                        id: "master", 
                        label: "Masters", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    },
                    { 
                        id: "doctorat", 
                        label: "Doctorats", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    },
                    { 
                        id: "option", 
                        label: "Options", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    },
                    { 
                        id: "annee", 
                        label: "Années Universitaires", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    },
                    { 
                        id: "modules", 
                        label: "Modules", 
                        link: "#", 
                        parentId: "universite",
                        permissions:['all'],
                    }
              
            ],
        },
        {
            id:'Examens',
            icon :'ri-git-repository-fill',
            label:'Examens',
            link:'#',
            permissions:['all'],
            subItems: [
                { 
                id: "sessionsnormals",
                    label: "Sessions normals",
                    link: "#",
                    parentId: "examen",
                    permissions:['all'],
                },
                { 
                    id: "sessionsderatrappages",
                    label: "Sessions de ratrappages",
                    link: "#",
                    parentId: "examen",
                    permissions:['all'],
                },
          
        ],
        },
        {
            id:'corrections',
            icon :'ri-git-repository-commits-fill',
            label:'Corrections',
            link:'#',
            permissions:['all'],
            subItems: [
                { 
                id: "sessionsnormals",
                    label: "Sessions normals",
                    link: "#",
                    parentId: "correction",
                    permissions:['all'],
                },
                { 
                    id: "sessionsderatrappages",
                    label: "Sessions de ratrappages",
                    link: "#",
                    parentId: "correction",
                    permissions:['all'],
                },
          
        ],
        },
        {
            id:'Propositions',
            icon :'ri-survey-fill',
            label:'Propositions',
            link:'#',
            permissions:['all'],
            
        },
        {
            id:'Etudiants',
            icon :'ri-team-line ',
            label:'Etudiants',
            link:'#',
            permissions:['all'],
            subItems: [
                { 
                id: "general",
                    label: "Général",
                    link: "#",
                    parentId: "etudiant",
                    permissions:['all'],
                },
                { 
                    id: "filiere",
                    label: "Filière",
                    link: "#",
                    parentId: "etudiant",
                    permissions:['all'],
                }
        ],
        },
        {
            id:'BFbook',
            icon :'bx bx-conversation',
            label:'BFbook',
            link:'#',
            permissions:['all']
        },
        {
            id:'Messagerie',
            icon :'bx bxs-message',
            label:'Messagérie',
            link:'#',
            permissions:['all']
        },
        {
            id:'Paintes',
            icon :'bx bxs-no-entry',
            label:'Paintes',
            link:'#',
            permissions:['all'],
            subItems: [
                { 
                id: "enccours",
                    label: "En cours",
                    link: "#",
                    parentId: "plainte",
                    permissions:['all'],
                },
                { 
                    id: "resolu",
                    label: "Résolus",
                    link: "#",
                    parentId: "plainte",
                    permissions:['all'],
                }
        ],
        },
        {
            id:'LaCaise',
            icon :'bx bx-money',
            label:'La Caise',
            link:'#',
            permissions:['all'],
            subItems: [
                { 
                id: "abonnement",
                    label: "Abonnements",
                    link: "#",
                    parentId: "lacaise",
                    permissions:['all'],
                },
                { 
                    id: "etudiants",
                    label: "Etudiants",
                    link: "#",
                    parentId: "lacaise",
                    permissions:['all'],
                }
        ],
        },
        {
            id:'Parametre',
            icon :'ri-settings-2-fill ',
            label:'Paramètre',
            link:'#',
            permissions:['all']
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;