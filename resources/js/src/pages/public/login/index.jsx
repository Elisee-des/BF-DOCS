import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="auth-page-wrapper pt-5">
                    <div
                        className="auth-one-bg-position auth-one-bg"
                        id="auth-particles"
                    >
                        <div className="bg-overlay"></div>

                        <div className="shape">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 1440 120"
                            >
                                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="auth-page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-center mt-sm-5 mb-4 text-white-50">
                                        <div>
                                            <Link
                                                to="/"
                                                className="d-inline-block auth-logo"
                                            >
                                                    <span className="text-success fs-20 fw-bolder">
                                                        BF-DOCS
                                                    </span>
                                            </Link>
                                        </div>
                                        <p className="mt-3 fs-15 fw-medium">
                                            Votre Portail Pour La Réussite
                                            Académique
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="card mt-4">
                                        <div className="card-body p-1">
                                            <div className="text-center mt-2">
                                                <h5 className="text-primary">
                                                    Bienvenue !!!
                                                </h5>
                                                <p className="text-muted">
                                                    Veuillez entrer vos
                                                    coordonnées pour continuer.
                                                </p>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <form action="index.html">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="username"
                                                            className="form-label"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="username"
                                                            placeholder="Entrez votre email"
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <div className="float-end">
                                                            <Link
                                                                to="/mot-de-passe-oublié"
                                                                className="text-muted"
                                                            >
                                                                Mot de passe
                                                                oublié ?
                                                            </Link>
                                                        </div>
                                                        <label
                                                            className="form-label"
                                                            htmlFor="password-input"
                                                        >
                                                            Mot de passe
                                                        </label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <input
                                                                type="password"
                                                                className="form-control pe-5 password-input"
                                                                placeholder="Entrez votre mot de passe"
                                                                id="password-input"
                                                            />
                                                            <button
                                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                type="button"
                                                                id="password-addon"
                                                            >
                                                                <i className="ri-eye-fill align-middle"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="auth-remember-check"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="auth-remember-check"
                                                        >
                                                            Se rappeler de moi
                                                        </label>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Link
                                                        to='/admin/tableau-de-bord'
                                                            className="btn btn-success w-100"
                                                            type="submit"

                                                        >
                                                            Connexion
                                                        </Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="mb-0">
                                            Je n'ai pas de compte ?
                                            <a
                                                href="/inscription"
                                                className="fw-semibold text-primary text-decoration-underline"
                                            >&nbsp;
                                                Inscription
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginPage;
