import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";
import AuthService from '../../../services/authService';
import ApiRoute from '../../../utility/ApiRoute';

const LoginPage = () => {
    const [formInput, setFormInput] = useState({email:'', password:''});
    const [message, setMessage]=useState();
    const [isloading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    const isFormEmpty = () => {
        return Object.values(formInput).every(value => value === '');
    }

    const onSave = (e) => {
        setIsLoading(true);
        e.preventDefault();
        console.log(formInput);
        AuthService.login(formInput.email, formInput.password)
        .then(
            (response)=> {
                setIsLoading(false);
                navigate("/admin/tableau-de-bord");
            },
            error => {
                const resMessage = ApiRoute?.handlerError(error);
                setIsLoading(false);
                setMessage(resMessage)
                alert('Email ou mot de passe incorrect', resMessage)

                // errorNotif('Leger souci', resMessage)
            }
        )
    }

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
                                                <Form onSubmit={onSave} action="index.html">
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="email"
                                                            className="form-label"
                                                        >
                                                            Email
                                                        </label>
                                                        <Input
                                                            type="email"
                                                            className="form-control"
                                                            onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                                                            id="email"
                                                            placeholder="Entrez votre email"
                                                            name="email"
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
                                                            <Input
                                                                type="password"
                                                                className="form-control pe-5 password-input"
                                                                placeholder="Entrez votre mot de passe"
                                                                id="password-input"
                                                                onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                                                                name="password"
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

                                                    <div className="mt-4">
                                                        {!isloading ? (<><Button
                                                            className="btn btn-success w-100"
                                                            disabled={isFormEmpty()}
                                                            type="submit"
                                                        >
                                                            Connexion
                                                        </Button></>) : (<><Button className="btn btn-success w-100"
                                                            disabled={isFormEmpty()}
                                                            type="submit">
                                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            <span class="sr-only">Loading...</span>
                                                            &nbsp;Connexion en cours...
                                                        </Button></>)}
                                                    </div>
                                                </Form>
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
