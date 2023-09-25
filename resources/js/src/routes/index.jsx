import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PublicLayout from "../layouts/public";
import PrivateLayout from "../layouts/private";
import CommonLayout from "../layouts/common";
import Loader from "../components/loader";
import { commonRoutes, publicRoutes, privateRoutes } from "./allRoute";
import RequireAuth from "./requireAuth";
import NotFound from "../components/notFound";
import { getUserRole } from '../utility/Utils';

const NoMatchPage = React.lazy(() => import("../pages/priate/NoMatch"));


const MainRoutes = () => {

    const userRole = getUserRole()
    console.log('log->',userRole);

    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                {privateRoutes.map((route, index) => {
                    const ElementPage = route.component;
                    const permissions = route.permissions;

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
                                    <RequireAuth>
                                        {(permissions =='all'|| permissions==userRole) ?(
                                            <ElementPage />
                                        ):(
                                            <NoMatchPage/>
                                        )}
                                    </RequireAuth>
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
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;
