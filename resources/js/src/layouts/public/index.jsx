import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = () => {
    return (
        <>
            <div className="layout-wrapper landing">
                <Header />
                <Outlet />
                <Footer />
                <button
                    className="btn btn-danger btn-icon landing-back-top"
                    id="back-to-top"
                >
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </>
    );
};

export default PublicLayout;
