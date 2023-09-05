import React from "react";

const RegsiterPage = () => {
    return (
        <React.Fragment>
            <div class="auth-page-wrapper pt-5">
                <div
                    class="auth-one-bg-position auth-one-bg"
                    id="auth-particles"
                >
                    <div class="bg-overlay"></div>

                    <div class="shape">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 1440 120"
                        >
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                        </svg>
                    </div>
                </div>
                <div class="auth-page-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <a
                                            href="index.html"
                                            class="d-inline-block auth-logo"
                                        >
                                            <img
                                                src="assets/images/logo-light.png"
                                                alt=""
                                                height="20"
                                            />
                                        </a>
                                    </div>
                                    <p class="mt-3 fs-15 fw-medium">
                                        Créer un compte pour profité de
                                        avantages de U-DOC
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-md-8 col-lg-6 col-xl-5">
                                <div class="card mt-4">
                                    <div class="card-body p-4">
                                        <div class="text-center mt-2">
                                            <h5 class="text-primary">
                                                Inscrivez-vous
                                            </h5>
                                            <p class="text-muted">
                                                Veuillez renseigner tous les
                                                champs
                                            </p>
                                        </div>
                                        <div class="p-2 mt-4">
                                            <form
                                                class="needs-validation"
                                                novalidate
                                                action="index.html"
                                            >
                                                <div class="mb-3">
                                                    <label
                                                        for="nom"
                                                        class="form-label"
                                                    >
                                                        Nom
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="nom"
                                                        placeholder="Entrez votre nom"
                                                        required
                                                    />
                                                    <div class="invalid-feedback">
                                                        Veillez entrer votre nom
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label
                                                        for="prenom"
                                                        class="form-label"
                                                    >
                                                        Prénom
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="prenom"
                                                        placeholder="Entrez votre prénom"
                                                        required
                                                    />
                                                    <div class="invalid-feedback">
                                                        Veillez entrer votre prénom
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label
                                                        for="ine"
                                                        class="form-label"
                                                    >
                                                        INE
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="ine"
                                                        placeholder="Entrez votre INE"
                                                        required
                                                    />
                                                    <div class="invalid-feedback">
                                                        Veillez entrer votre INE
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label
                                                        for="nom"
                                                        class="form-label"
                                                    >
                                                        Numero de telephone
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="numero_telephone"
                                                        placeholder="Entrez votre numéro de telephone"
                                                        required
                                                    />
                                                    <div class="invalid-feedback">
                                                        Veillez entrer votre numero dr telephone
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label
                                                        for="email"
                                                        class="form-label"
                                                    >
                                                        Email
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="email"
                                                        placeholder="Entrez votre adresse email"
                                                        required
                                                    />
                                                    <div class="invalid-feedback">
                                                       Veuillez entrer votre adresse email
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label
                                                        class="form-label"
                                                        for="password-input"
                                                    >
                                                        Mot de passe
                                                    </label>
                                                    <div class="position-relative auth-pass-inputgroup">
                                                        <input
                                                            type="password"
                                                            class="form-control pe-5 password-input"
                                                            onpaste="return false"
                                                            placeholder="Entré votre mot de passe"
                                                            id="password-input"
                                                            aria-describedby="passwordInput"
                                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                            required
                                                        />
                                                        <button
                                                            class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button"
                                                            id="password-addon"
                                                        >
                                                            <i class="ri-eye-fill align-middle"></i>
                                                        </button>
                                                        <div class="invalid-feedback">
                                                            Veuillez entrer un mot de passe
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label
                                                        class="form-label"
                                                        for="password-input"
                                                    >
                                                        Répéte le mot de passe
                                                    </label>
                                                    <div class="position-relative auth-pass-inputgroup">
                                                        <input
                                                            type="password"
                                                            class="form-control pe-5 password-input"
                                                            onpaste="return false"
                                                            placeholder="Entrez le même mot de passe"
                                                            id="password-input"
                                                            aria-describedby="passwordInput"
                                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                            required
                                                        />
                                                        <button
                                                            class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                            type="button"
                                                            id="password-addon"
                                                        >
                                                            <i class="ri-eye-fill align-middle"></i>
                                                        </button>
                                                        <div class="invalid-feedback">
                                                            Veuillez entrer un mot de passe
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <p class="mb-0 fs-12 text-muted fst-italic">
                                                        En vous incrivant, vous accepter les
                                                        <a
                                                            href="#"
                                                            class="text-primary text-decoration-underline fst-normal fw-medium"
                                                        >
                                                            Les termes et conditions d'utilisation de U-DOC
                                                        </a>
                                                    </p>
                                                </div>

                                                <div
                                                    id="password-contain"
                                                    class="p-3 bg-light mb-2 rounded"
                                                >
                                                    <h5 class="fs-13">
                                                        Password must contain:
                                                    </h5>
                                                    <p
                                                        id="pass-length"
                                                        class="invalid fs-12 mb-2"
                                                    >
                                                        Minimum
                                                        <b>8 characters</b>
                                                    </p>
                                                    <p
                                                        id="pass-lower"
                                                        class="invalid fs-12 mb-2"
                                                    >
                                                        At <b>lowercase</b>
                                                        letter (a-z)
                                                    </p>
                                                    <p
                                                        id="pass-upper"
                                                        class="invalid fs-12 mb-2"
                                                    >
                                                        At least
                                                        <b>uppercase</b>
                                                        letter (A-Z)
                                                    </p>
                                                    <p
                                                        id="pass-number"
                                                        class="invalid fs-12 mb-0"
                                                    >
                                                        A least <b>number</b>
                                                        (0-9)
                                                    </p>
                                                </div>

                                                <div class="mt-4">
                                                    <button
                                                        class="btn btn-success w-100"
                                                        type="submit"
                                                    >
                                                        S"incrire
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 text-center">
                                    <p class="mb-0">
                                        J'ai déja un compte 
                                        <a
                                            href="auth-signin-basic.html"
                                            class="fw-semibold text-primary text-decoration-underline"
                                        >
                                            Connexion
                                        </a>
                                    </p>
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
