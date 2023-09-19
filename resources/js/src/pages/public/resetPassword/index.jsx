import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <>
        <div className="page-content">
        <div class="auth-page-wrapper pt-5">
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div class="bg-overlay"></div>

            <div class="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                </svg>
            </div>
        </div>

        <div class="auth-page-content">
            <div class="container">
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

                <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5">
                            <div class="card mt-4">

                                <div class="card-body p-1">
                                    <div class="text-center mt-2">
                                        <h5 class="text-primary">Mot de passe oublié?</h5>
                                    </div>

                                    <div class="alert alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                                        Un email contenant des instruction sera envoyé sur votre email.
                                    </div>
                                    <div class="p-2">
                                        <form>
                                            <div class="mb-4">
                                                <label class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email" placeholder="Entrer votre email"/>
                                            </div>

                                            <div class="text-center mt-4">
                                                <button class="btn btn-success w-100" type="submit">Envoyez</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 text-center">
                                <p class="mb-0">Attendez!, je me rappel de mon mot de passe... <Link to="/connexion" class="fw-semibold text-primary text-decoration-underline"> Connexion </Link> </p>
                            </div>

                        </div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <p class="mb-0 text-muted">&copy;
                                <script>document.write(new Date().getFullYear())</script> Velzon. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        </div>
    </>
  )
}

export default index