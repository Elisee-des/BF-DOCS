import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebars";
import "./index.css"

function PrivateLayout() {
    return (
        <>
            <div id="layout-wrapper">
                <Header/>
                <Sidebar/>
                <div className="main-content">
                    <div className="page-content" style={{ backgroundColor: "#14a44d !important" }}>
                        <Outlet />
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivateLayout;
