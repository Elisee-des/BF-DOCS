import React from "react";
import { Link } from "react-router-dom";

const RegsiterPage = () => {
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
                                            <a
                                                href="/"
                                                className="d-inline-block auth-logo"
                                            >
                                               <a
                                                    className="navbar-brand"
                                                    href="/"
                                                >
                                                    <span className="text-success fs-20 fw-bolder">
                                                        BF-DOCS
                                                    </span>
                                                </a>
                                            </a>
                                        </div>
                                        <p className="mt-3 fs-15 fw-medium">
                                            Créer un compte pour profité des
                                            avantages de BF-DOCS
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="card mt-4">
                                        <div className="card-body p-4">
                                            <div className="text-center mt-2">
                                                <h5 className="text-primary">
                                                    Inscrivez-vous
                                                </h5>
                                                <p className="text-muted">
                                                    Veuillez renseigner tous les
                                                    champs
                                                </p>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <form
                                                    className="needs-validation"
                                                    novalidate
                                                    action="index.html"
                                                >
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="nom"
                                                            className="form-label"
                                                        >
                                                            Nom
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="nom"
                                                            placeholder="Entrez votre nom"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Veillez entrer votre
                                                            nom
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="prenom"
                                                            className="form-label"
                                                        >
                                                            Prénom
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="prenom"
                                                            placeholder="Entrez votre prénom"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Veillez entrer votre
                                                            prénom
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="ine"
                                                            className="form-label"
                                                        >
                                                            INE
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="ine"
                                                            placeholder="Entrez votre INE"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Veillez entrer votre
                                                            INE
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="nom"
                                                            className="form-label"
                                                        >
                                                            Numero de telephone
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="numero_telephone"
                                                            placeholder="Entrez votre numéro de telephone"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Veillez entrer votre
                                                            numero dr telephone
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="email"
                                                            className="form-label"
                                                        >
                                                            Email
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="Entrez votre adresse email"
                                                            required
                                                        />
                                                        <div className="invalid-feedback">
                                                            Veuillez entrer
                                                            votre adresse email
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="password-input"
                                                        >
                                                            Mot de passe <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <div className="position-relative auth-pass-inputgroup">
                                                            <input
                                                                type="password"
                                                                className="form-control pe-5 password-input"
                                                                onpaste="return false"
                                                                placeholder="Entré votre mot de passe"
                                                                id="password-input"
                                                                aria-describedby="passwordInput"
                                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                                required
                                                            />
                                                            <button
                                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                type="button"
                                                                id="password-addon"
                                                            >
                                                                <i className="ri-eye-fill align-middle"></i>
                                                            </button>
                                                            <div className="invalid-feedback">
                                                                Veuillez entrer
                                                                un mot de passe
                                                                <span className="text-danger">
                                                                *
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="password-input"
                                                        >
                                                            Répéte le mot de
                                                            passe <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <div className="position-relative auth-pass-inputgroup">
                                                            <input
                                                                type="password"
                                                                className="form-control pe-5 password-input"
                                                                onpaste="return false"
                                                                placeholder="Entrez le même mot de passe"
                                                                id="password-input"
                                                                aria-describedby="passwordInput"
                                                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                                required
                                                            />
                                                            <button
                                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                type="button"
                                                                id="password-addon"
                                                            >
                                                                <i className="ri-eye-fill align-middle"></i>
                                                            </button>
                                                            <div className="invalid-feedback">
                                                                Veuillez entrer
                                                                un mot de passe
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <p className="mb-0 fs-12 text-muted fst-italic">
                                                            En vous incrivant,
                                                            vous accepter les
                                                            <a
                                                                href="#"
                                                                className="text-primary text-decoration-underline fst-normal fw-medium"
                                                            >
                                                                Les termes et
                                                                conditions
                                                                d'utilisation de
                                                                BF-DOCS
                                                            </a>
                                                        </p>
                                                    </div>

                                                    <div
                                                        id="password-contain"
                                                        className="p-3 bg-light mb-2 rounded"
                                                    >
                                                        <h5 className="fs-13">
                                                            Le mot de passe doit contenir:
                                                        </h5>
                                                        <p
                                                            id="pass-length"
                                                            className="invalid fs-12 mb-2"
                                                        >
                                                            Minimum
                                                            <b>6 charactéres</b>
                                                        </p>
                                                        <p
                                                            id="pass-lower"
                                                            className="invalid fs-12 mb-2"
                                                        >
                                                            une lettre en <b>minuscule</b>
                                                             (a-z)
                                                        </p>
                                                        <p
                                                            id="pass-upper"
                                                            className="invalid fs-12 mb-2"
                                                        >
                                                            une lettre en 
                                                            <b>mascule</b>
                                                             (A-Z)
                                                        </p>
                                                        <p
                                                            id="pass-number"
                                                            className="invalid fs-12 mb-0"
                                                        >
                                                            un
                                                            <b>nombre</b>
                                                            (0-9)
                                                        </p>
                                                    </div>

                                                    <div className="mt-4">
                                                        <button
                                                            className="btn btn-success w-100"
                                                            type="submit"
                                                        >
                                                            S"incrire
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="mb-0">
                                            J'ai déja un compte
                                            <Link
                                                to="/connexion"
                                                className="fw-semibold text-primary text-decoration-underline"
                                            >
                                                Connexion
                                            </Link>
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

export default RegsiterPage;
