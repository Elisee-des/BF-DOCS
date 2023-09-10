import React from 'react';

const HomePage = React.lazy(() => import("../pages/public/home/index"));
const LoginPage = React.lazy(() => import("../pages/public/login"));
const RegisterPage = React.lazy(() => import("../pages/public/register"));
const UniversitesPage = React.lazy(() => import("../pages/public/universites"));
const DocumentPage = React.lazy(() => import("../pages/public/documents"));

const PublicRoutes = [
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

export {PublicRoutes}