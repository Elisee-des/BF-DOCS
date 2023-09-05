import React from 'react';

const HomePage = React.lazy(() => import("../pages/public/home/index"));
const LoginPage = React.lazy(() => import("../pages/public/login"));
const RegisterPage = React.lazy(() => import("../pages/public/register"));

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
]

export {PublicRoutes}