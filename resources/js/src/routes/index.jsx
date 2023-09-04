import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const HomePage = React.lazy(() => import("../pages/public/home/index"));
// const LoginPage = React.lazy(() => import("../pages/common/login"));
// const Dashboard = React.lazy(() => import("../pages/private/home"));
// const RegisterPage = React.lazy(() => import("../pages/private/register"));
// import PublicLayout from '../layouts/public';
import Loader from "../components/loader";

const MainRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route
                    path="/"
                    element={
                        <React.Suspense
                            fallback={
                                <>
                                    <Loader />{" "}
                                </>
                            }
                        >
                            <HomePage />
                        </React.Suspense>
                    }
                />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
