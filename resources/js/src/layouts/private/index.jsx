import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

function PrivateLayout() {
    return (
        <>
            <div id="layout-wrapper">
                <Header/>
                <Sidebar/>
                <div className="main-content">
                    <div className="page-content">
                        <Outlet />
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivateLayout;
