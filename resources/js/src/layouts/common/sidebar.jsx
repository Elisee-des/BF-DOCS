import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="app-menu navbar-menu">
            <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img
                            src="../../assets/images/logo-sm.png"
                            alt=""
                            height="22"
                        />
                    </span>
                    <span className="logo-lg">
                        <img
                            src="../../assets/images/logo-dark.png"
                            alt=""
                            height="17"
                        />
                    </span>
                </a>
                <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img
                            src="../../assets/images/logo-sm.png"
                            alt=""
                            height="22"
                        />
                    </span>
                    <span className="logo-lg">
                        <img
                            src="../../assets/images/logo-light.png"
                            alt=""
                            height="17"
                        />
                    </span>
                </a>
                <button
                    type="button"
                    className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                    id="vertical-hover"
                >
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">
                    <div id="two-column-menu"></div>
                    <ul className="navbar-nav" id="navbar-nav">
                        
                        <li className="nav-item">
                            <Link
                                className="nav-link menu-link"
                                to="/admin/tableau-de-bord"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebarDashboards"
                            >
                                <i className="ri-home-3-fill"></i>
                                <span data-key="t-dashboards">Tableau de bord</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link menu-link"
                                href="#sidebarParametre"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebarParametre"
                            >
                                <i className="ri-settings-5-fill"></i>
                                <span data-key="t-parametre">Documents</span>
                            </a>
                            <div
                                className="collapse menu-dropdown"
                                id="sidebarParametre"
                            >
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a
                                            href="layouts-horizontal.html"
                                            target="_blank"
                                            className="nav-link"
                                            data-key="t-horizontal"
                                        >
                                            Horizontal
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link menu-link"
                                href="#sidebarParametre"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebarParametre"
                            >
                                <i className="ri-settings-5-fill"></i>
                                <span data-key="t-parametre">Mon Profil</span>
                            </a>
                            <div
                                className="collapse menu-dropdown"
                                id="sidebarParametre"
                            >
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a
                                            href="layouts-horizontal.html"
                                            target="_blank"
                                            className="nav-link"
                                            data-key="t-horizontal"
                                        >
                                            Horizontal
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="sidebar-background"></div>
        </div>
    );
}

export default Sidebar;
