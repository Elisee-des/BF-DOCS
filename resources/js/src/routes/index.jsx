import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PublicLayout from "../layouts/public";
import PrivateLayout from "../layouts/private";
import CommonLayout from "../layouts/common";
import Loader from "../components/loader";
import { commonRoutes, publicRoutes, privateRoutes } from "./allRoute";

const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                {privateRoutes.map((route, index) => {
                    const ElementPage = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <React.Suspense
                                    fallback={
                                        <>
                                            <Loader />
                                        </>
                                    }
                                >
                                    <ElementPage />
                                </React.Suspense>
                            }
                        />
                    );
                })}
            </Route>

            <Route element={<CommonLayout />}>
                {commonRoutes.map((route, index) => {
                    const ElementPage = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <React.Suspense
                                    fallback={
                                        <>
                                            <Loader />
                                        </>
                                    }
                                >
                                    <ElementPage />
                                </React.Suspense>
                            }
                        />
                    );
                })}
            </Route>

            <Route element={<PublicLayout />}>
                {publicRoutes.map((route, index) => {
                    const ElementPage = route.component;
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={
                                <React.Suspense
                                    fallback={
                                        <>
                                            <Loader />
                                        </>
                                    }
                                >
                                    <ElementPage />
                                </React.Suspense>
                            }
                        />
                    );
                })}
            </Route>
        </Routes>
    );
};

export default MainRoutes;
