import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="app-menu navbar-menu">
            <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img
                            src="assets/images/logo-sm.png"
                            alt=""
                            height="22"
                        />
                    </span>
                    <span className="logo-lg">
                        <img
                            src="assets/images/logo-dark.png"
                            alt=""
                            height="17"
                        />
                    </span>
                </a>
                <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img
                            src="assets/images/logo-sm.png"
                            alt=""
                            height="22"
                        />
                    </span>
                    <span className="logo-lg">
                        <img
                            src="assets/images/logo-light.png"
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
                        <li className="menu-title">
                            <span data-key="t-menu">Menu</span>
                        </li>
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
                                <span data-key="t-dashboards">Dashboards</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link menu-link"
                                href="#sidebaUniversite"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebaUniversite"
                            >
                                <i className="ri-hotel-fill"></i>
                                <span data-key="t-universite">Universités</span>
                            </a>
                            <div
                                className="collapse menu-dropdown"
                                id="sidebaUniversite"
                            >
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <Link
                                            to="/admin/université/accueil"
                                            className="nav-link"
                                            data-key="t-accueil"
                                        >
                                            Accueil
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="apps-calendar.html"
                                            className="nav-link"
                                            data-key="t-calendar"
                                        >
                                            Gestion
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link menu-link"
                                href="#sidebarCaisse"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebarCaisse"
                            >
                                <i className="las la-donate"></i>
                                <span data-key="t-caisse">La Caisse</span>
                            </a>
                            <div
                                className="collapse menu-dropdown"
                                id="sidebarCaisse"
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
                                href="#sidebarUtilisateur"
                                data-bs-toggle="collapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="sidebarUtilisateur"
                            >
                                <i className="ri-group-fill"></i>
                                <span data-key="t-universite">Utilisateurs</span>
                            </a>
                            <div
                                className="collapse menu-dropdown"
                                id="sidebarUtilisateur"
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
                                <span data-key="t-parametre">Paramètre</span>
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
