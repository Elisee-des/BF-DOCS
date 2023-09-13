import React from 'react';

const HomePage = React.lazy(() => import("../pages/public/home/index"));
const DashbordPage = React.lazy(() => import("../pages/private/dashbord"));
const UniversiteAccueilPage = React.lazy(() => import("../pages/private/universite/accueil"));
const LoginPage = React.lazy(() => import("../pages/public/login"));
const RegisterPage = React.lazy(() => import("../pages/public/register"));
const UniversitesPage = React.lazy(() => import("../pages/public/universites"));
const DocumentPage = React.lazy(() => import("../pages/public/documents"));

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        permissions: [],
    },

    {
        path: '/connexion',
        component: LoginPage,
        permissions: [],
    },

    {
        path: '/inscription',
        component: RegisterPage,
        permissions: [],
    },

    {
        path: '/universités',
        component: UniversitesPage,
        permissions: [],
    },

    {
        path: '/documents',
        component: DocumentPage,
        permissions: [],
    },

]


// ------ PRIVATE PAGE ------- //


const privateRoutes = [
    {
        path: '/admin/tableau-de-bord',
        component: DashbordPage,
        permissions: [],
    },
    {
        path: '/admin/université/accueil',
        component: UniversiteAccueilPage,
        permissions: [],
    },
]

export {publicRoutes, privateRoutes}