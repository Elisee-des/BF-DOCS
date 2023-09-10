import React from "react";

const Footer = () => {
    return (
        <footer className="custom-footer bg-dark py-5 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div>
                            <div>
                                <a className="navbar-brand" href="index.html">
                                    <span className="text-success fs-20 fw-bolder">
                                        BF-DOC
                                    </span>
                                </a>
                            </div>
                            <div className="mt-4 fs-13">
                                <p>
                                    Notre mission est de rendre l'apprentissage
                                    plus accessible, collaboratif et engageant
                                    pour chaque étudiant. Rejoignez-nous dès
                                    aujourd'hui et découvrez une nouvelle
                                    dimension dans votre parcours académique.
                                </p>
                                <p className="ff-secondary">
                                    BF-DOC - La Connaissance à Votre Portée !
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 ms-lg-auto">
                        <div className="row">
                            <div className="col-sm-4 mt-4">
                                <h5 className="text-white mb-0">BF-DOC</h5>
                                <div className="text-muted mt-3">
                                    <ul className="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <a href="#">
                                                A propos de nous
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Galleries
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Réseau social
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Documents
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-4">
                                <h5 className="text-white mb-0">Authentification</h5>
                                <div className="text-muted mt-3">
                                    <ul className="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <a href="#">
                                                Inscription
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Connexion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-chat.html">Mot de passe oublié</a>
                                        </li>
                                        <li>
                                            <a href="apps-crm-deals.html">
                                                Besion d'aide
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 mt-4">
                                <h5 className="text-white mb-0">Support</h5>
                                <div className="text-muted mt-3">
                                    <ul className="list-unstyled ff-secondary footer-list">
                                        <li>
                                            <a href="#">FAQ (Questions-Reponses)</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Contactez-nous
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center text-sm-start align-items-center mt-5">
                    <div className="col-sm-6">
                        <div>
                            <p className="copy-rights mb-0">
                                <script>
                                    {" "}
                                    document.write(new Date().getFullYear()){" "}
                                </script>{" "}
                                © BF-DOC - Debut de fonctionnement le 31 decembre 2023
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end mt-3 mt-sm-0">
                            <ul className="list-inline mb-0 footer-social-link">
                                <li className="list-inline-item">
                                    <a href="#" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-facebook-fill"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-linkedin-fill"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="avatar-xs d-block">
                                        <div className="avatar-title rounded-circle">
                                            <i className="ri-telegram-fill"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
