import React from 'react';

// private //
const AdminDashboardPage = React.lazy(() => import("../pages/private/dashbord"));
const UniversiteAccueilPage = React.lazy(() => import("../pages/private/universite/accueil"));

// public //
const HomePage = React.lazy(() => import("../pages/public/home/index"));
const LoginPage = React.lazy(() => import("../pages/public/login"));
const RegisterPage = React.lazy(() => import("../pages/public/register"));
const UniversitesPage = React.lazy(() => import("../pages/public/universites"));
const DocumentPage = React.lazy(() => import("../pages/public/documents"));
const MotDePasseOublier = React.lazy(() => import("../pages/public/resetPassword"));

// common //
const CommonDashboardPage = React.lazy(() => import("../pages/common/dashbord"));


// ------ PUBLIC PAGE/ROUTE ------- //


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
        path: '/mot-de-passe-oublié',
        component: MotDePasseOublier,
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


// ------ PRIVATE PAGE/ROUTE ------- //


const privateRoutes = [
    {
        path: '/admin/tableau-de-bord',
        component: AdminDashboardPage,
        permissions: ["all"],
    },
    {
        path: '/admin/université/accueil',
        component: UniversiteAccueilPage,
        permissions: ["all"],
    },
]


// ------ COMMON PAGE/ROUTE ------- //


const commonRoutes = [
    {
        path: '/universités/université-norbert-zongo',
        component: CommonDashboardPage,
        permissions: [],
    },
]

export {publicRoutes, privateRoutes, commonRoutes}