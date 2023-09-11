import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-landing fixed-top"
            id="navbar"
        >
            <div className="container">
                <a className="navbar-brand" href="index.html">
                <span className="text-success fs-20 fw-bolder">BF-DOC</span>
                </a>
                <button
                    className="navbar-toggler py-0 fs-20 text-body"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="mdi mdi-menu"></i>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        className="navbar-nav mx-auto mt-2 mt-lg-0"
                        id="navbar-example"
                    >
                        <li className="nav-item">
                            <a className="nav-link active" href="#hero">
                                Accueil
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/universités">
                                Universités
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/documents">
                                Documents
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Blog
                            </a>
                        </li>
                    </ul>

                    <div className="">
                        <Link
                        to="/connexion"
                            href="auth-signin-basic.html"
                            className="btn btn-link fw-medium text-decoration-none text-dark"
                        >
                            Connexion
                        </Link>
                        <Link
                        to="/inscription"
                            href="auth-signup-basic.html"
                            className="btn btn-primary"
                        >
                            Inscription
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
