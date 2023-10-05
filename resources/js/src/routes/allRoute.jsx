import React from 'react';

// private //
const AdminDashboardPage = React.lazy(() => import("../pages/private/dashbord"));
const UniversiteAccueilPage = React.lazy(() => import("../pages/private/universite/accueil"));
const UniversiteAjoutPage = React.lazy(() => import("../pages/private/universite/ajout"));
const UniversiteEditionPage = React.lazy(() => import("../pages/private/universite/edition"));

// public //
const HomePage = React.lazy(() => import("../pages/public/home/index"));
const LoginPage = React.lazy(() => import("../pages/public/login"));
const RegisterPage = React.lazy(() => import("../pages/public/register"));
const UniversitesPage = React.lazy(() => import("../pages/public/universites"));
const DocumentPage = React.lazy(() => import("../pages/public/documents"));
const MotDePasseOublier = React.lazy(() => import("../pages/public/resetPassword"));

// common //
const CommonDashboardPage = React.lazy(() => import("../pages/common/dashbord"));
const CommonSettingPage = React.lazy(() => import("../pages/common/setting"));


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
    {
        path: '/admin/université/ajout',
        component: UniversiteAjoutPage,
        permissions: ["all"],
    },
    {
        path: '/admin/université/edition/:idUniversite',
        component: UniversiteEditionPage,
        permissions: ["all"],
    },
]


// ------ COMMON PAGE/ROUTE ------- //


const commonRoutes = [
    {
        path:"/admin/universités/:idUniversite/dashboard",
        component: CommonDashboardPage,
        permissions: [],
    },
    {
        path:"/admin/université/dashboard",
        component: CommonSettingPage,
        permissions: [],
    },
    {
        path:"/admin/université/:idUniversite/parametre",
        component: CommonSettingPage,
        permissions: [],
    },
]

export {publicRoutes, privateRoutes, commonRoutes}