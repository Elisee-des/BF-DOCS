import React from "react";
import Header from "../../../layouts/public/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="hero">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10">
                            <div className="text-center mt-lg-5 pt-5">
                                <h1 className="display-6 fw-semibold mb-3 lh-base">
                                    <span className="text-success">BF-DOC</span>:
                                    Votre Portail Pour La Réussite Académique
                                </h1>
                                <p className="lead text-muted lh-base">
                                    Bienvenue sur BF-DOC, la plateforme éducative
                                    de choix pour les étudiants du Burkina Faso.
                                    Que vous soyez étudiant à l'Université
                                    Norbert Zongo de Koudougou, à l'Université
                                    Joseph Ki-Zerbo, ou dans une autre
                                    université prestigieuse, BF-DOC est votre
                                    guichet unique pour tout ce dont vous avez
                                    besoin.
                                </p>

                                <div className="d-flex gap-2 justify-content-center mt-4">
                                    <Link
                                        to="/inscription"
                                        className="btn btn-primary"
                                    >
                                        Commencer
                                        <i className="ri-arrow-right-line align-middle ms-1"></i>
                                    </Link>
                                    <Link
                                        href="/documents"
                                        className="btn btn-danger"
                                    >
                                        Documents
                                        <i className="bx bxs-file-pdf align-middle ms-1"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                                <div className="card-body">
                                    <div className="live-preview">
                                        <div
                                            id="carouselExampleCaption"
                                            className="carousel slide"
                                            data-bs-ride="carousel"
                                        >
                                            <div
                                                className="carousel-inner"
                                                role="listbox"
                                            >
                                                <div className="carousel-item">
                                                    <img
                                                        src="assets/images/ujkz.jpeg"
                                                        alt=""
                                                        className="d-block img-fluid mx-auto w-10"
                                                    />
                                                    <div className="carousel-caption text-white-50">
                                                        <h5 className="text-white">
                                                            Université Joseph Ki Zerbo
                                                        </h5>
                                                        <p>
                                                            La grande et prestigieuse UJKZ est l'université qui possède le plus grand nombre d'etudiant. Vivante, dynamique et attrayant.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item active">
                                                    <img
                                                        src="assets/images/unz2.jpeg"
                                                        alt=""
                                                        className="d-block img-fluid mx-auto"
                                                    />
                                                    <div className="carousel-caption text-white-50">
                                                        <h5 className="text-white">
                                                            Université Norbert Zongo
                                                        </h5>
                                                        <p>
                                                            Elle est la plus grande université du burkina en terme de superfice. Elle possède une grande variété de filièere.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                className="carousel-control-prev"
                                                href="#carouselExampleCaption"
                                                role="button"
                                                data-bs-slide="prev"
                                            >
                                                <span
                                                    className="carousel-control-prev-icon"
                                                    aria-hidden="true"
                                                ></span>
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                            </a>
                                            <a
                                                className="carousel-control-next"
                                                href="#carouselExampleCaption"
                                                role="button"
                                                data-bs-slide="next"
                                            >
                                                <span
                                                    className="carousel-control-next-icon"
                                                    aria-hidden="true"
                                                ></span>
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1440 120"
                    >
                        <g mask='url("#SvgjsMask1003")' fill="none">
                            <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"></path>
                        </g>
                    </svg>
                </div>
            </section>

            <section className="section" id="services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <h1 className="mb-3 ff-secondary fw-semibold lh-base">
                                Explorez notre monde académique
                                </h1>
                                <p className="text-muted">
                                    Nous mettons gratuitement a votre disposition des examens, des corrections des docteurs, des années passées.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-stack-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Une Bibliothèque Complète</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Notre collection s'étend sur des années d'examens, de corrections, de modules de cours, et bien plus encore. Couvrant les années de 2016 à aujourd'hui, elle englobe les sessions normales et de rattrapages
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="bx bxs-file-pdf fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Visualisez Avant de Télécharger</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Avant de télécharger un examen ou une correction au format PDF, profitez de la possibilité de les prévisualiser sur notre plateforme. Vous savez ainsi précisément ce que vous obtiendrez.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="bx bx-user fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Inscription Gratuite 
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Créez un compte BF-DOC gratuitement en quelques instants. Commencez à explorer notre collection dès maintenant. Pour un accès complet, il vous suffit de mettre à jour votre compte.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-earth-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Un Réseau Social Pour Étudiant</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Exprimez-vous en publiant des articles sur notre réseau social pour étudiant. Échangez avec d'autres étudiants, posez des questions, partagez des astuces et des conseils. Bâtissez un réseau académique solide.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-lock-2-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Sécurité Maximale
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Nous prenons la sécurité de vos données et de votre compte très au sérieux. Vous pouvez explorer notre plateforme en toute confiance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-team-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Une Communauté Dynamique</h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Rejoignez une communauté active composée de milliers d'étudiants comme vous. Partagez vos expériences, collaborez sur des projets, élargissez votre réseau académique.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-slideshow-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Une Plateforme Approuvée et Légale
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    BF-DOC a reçu l'autorisation gouvernementale pour stocker et partager ces documents, ce qui garantit la légalité et la conformité de notre service.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-group-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    L'Équipe BF-DOC à Votre Service
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Derrière BF-DOC se trouve une équipe dévouée et des chefs de promotion engagés qui veillent à ce que notre collection soit toujours à jour. Nous nous efforçons de répondre à vos besoins académiques en temps réel.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-china-railway-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Découvrez Bien Plus que Votre Université
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    En plus des ressources de votre propre université, explorez une multitude de documents provenant d'autres établissements publics et privés. BF-DOC vous offre une perspective plus large de l'apprentissage.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-user-shared-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Connectez-vous avec Vos Collègues d'Études
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Échangez avec des étudiants et étudiantes venant des quatre coins du Burkina Faso. Établissez des liens, partagez des conseils, collaborez sur des projets et développez des amitiés durables.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-loader-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Vos Besoins, Notre Priorité
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Chez BF-DOC, nous comprenons que chaque étudiant est unique. C'est pourquoi nous offrons des fonctionnalités telles qu'un moteur de recherche ultra rapide, une collaboration étudiante, pour répondre à vos besoins spécifiques et bien d'autres.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-community-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">
                                    Album d'image des universités
                                    </h5>
                                    <p className="text-muted my-3 ff-secondary">
                                    Vous trouvez dans cette plateforme des albums d'images de nos prestigieuses universités. <a href="#">Cliquez-ici</a> vour voir nos sublimes universités.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-primary position-relative">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-sm">
                            <div>
                                <h4 className="text-white mb-0 fw-semibold">
                                    Inscrivez-vous maintenant ou connectez-vous pour profiter des avantages offertes par BF-DOC.
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-auto">
                            <div>
                                <Link
                                    to="/inscription"
                                    className="btn bg-gradient btn-success m-1"
                                >
                                    <i className="bx bx-run align-middle me-1"></i>
                                    Je m'inscris
                                </Link>

                                <Link
                                    to="/connexion"
                                    className="btn bg-gradient btn-info"
                                >
                                    <i className="ri-user-shared-line align-middle me-1"></i>
                                    connexion
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="text-muted">
                                <h5 className="fs-12 text-uppercase text-success">
                                    Documents
                                </h5>
                                <h4 className="mb-3">
                                    BF-DOC pour télécharger des documents universitaires
                                </h4>
                                <p className="mb-4 ff-secondary">
                                    Nous mettons à la disposition des etudiantes et etudiantes des documents(sujets et corrigés) des années passées. Nous donc des:
                                </p>

                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">
                                                        Examens des sessions normals
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">
                                                        Examens des sessions de rattrapages
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="vstack gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">
                                                        Corrigés des sessions normals
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <div className="avatar-xs icon-effect">
                                                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                            <i className="ri-check-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-0">
                                                        Corrigés des sessions de rattrages
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-7 col-10 ms-auto order-1 order-lg-2">
                            <div>
                                <img
                                    src="assets/images/landing/features/img-2.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-5 pt-lg-5 gy-4">
                        <div className="col-lg-6 col-sm-7 col-10 mx-auto">
                            <div>
                                <img
                                    src="assets/images/landing/features/img-3.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-muted ps-lg-5">
                                <h5 className="fs-12 text-uppercase text-success">
                                    U-Book
                                </h5>
                                <h4 className="mb-3">BF-DOC possède un reseau social.</h4>
                                <p className="mb-4">
                                    Notre réseau social est similaire a facebook. Vous aurez la possibilité de faire des publications, discuter avec les milliers d'etudiants et etudiantes.
                                </p>

                                <div className="vstack gap-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">
                                                Publiez
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">
                                                Commentez
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">
                                                Likez
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <div className="avatar-xs icon-effect">
                                                <div className="avatar-title bg-transparent text-success rounded-circle h2">
                                                    <i className="ri-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0">
                                                Discutez
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">
                                    Reponses aux questions fréquements posées
                                </h3>
                                <p className="text-muted mb-4 ff-secondary">
                                    Si vous ne trouvez pas les reponses à une de vos questions, veuillez soit nous ecrire, soit nous contactez par email ou par appel. <a href="#">Cliquez-ici</a> pour voir a qui demandé de l'aide.
                                </p>

                                <div className="">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-label rounded-pill"
                                    >
                                        <i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                                        Envoyez-nous un email
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-lg-5 g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-1">
                                    <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fw-semibold">
                                        Questions générals
                                    </h5>
                                </div>
                            </div>
                            <div
                                className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                                id="genques-accordion"
                            >
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="genques-headingOne"
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#genques-collapseOne"
                                            aria-expanded="true"
                                            aria-controls="genques-collapseOne"
                                        >
                                            Pourquoi BF-DOC ?
                                        </button>
                                    </h2>
                                    <div
                                        id="genques-collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="genques-headingOne"
                                        data-bs-parent="#genques-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste eum sapiente optio quia eius totam explicabo, mollitia non velit cum consequuntur dolorem architecto ducimus. Minima tenetur modi id iste, incidunt sunt, magni fugiat porro saepe nisi reprehenderit! Unde ipsa, molestiae omnis perferendis at harum.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="genques-headingTwo"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#genques-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="genques-collapseTwo"
                                        >
                                            Quel est l'objectif de BF-DOC ?
                                        </button>
                                    </h2>
                                    <div
                                        id="genques-collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="genques-headingTwo"
                                        data-bs-parent="#genques-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga placeat molestiae aut! Nihil maiores tempore laudantium eveniet totam, non dolorem necessitatibus minima impedit magni atque recusandae, ad omnis quibusdam fuga dolorum id delectus sit. Repellat, aspernatur odit debitis, rerum dolorum deserunt autem eveniet dolore soluta molestias maxime deleniti repudiandae.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="genques-headingThree"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#genques-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="genques-collapseThree"
                                        >
                                            Avez-vous la permissions de publiez ces documents ?
                                        </button>
                                    </h2>
                                    <div
                                        id="genques-collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="genques-headingThree"
                                        data-bs-parent="#genques-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas sunt, nostrum nam laboriosam amet itaque. Quos labore reprehenderit architecto fuga minima nesciunt, accusantium amet at. Eos sapiente officia minus ratione at? Fugiat, nobis voluptatibus deleniti delectus illum minima aperiam, repudiandae molestiae sapiente, ipsa sint soluta mollitia ipsum modi? Laudantium nihil praesentium aspernatur, facilis asperiores non quas hic provident ipsa.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="genques-headingFour"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#genques-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="genques-collapseFour"
                                        >
                                            Peux-t-on se faire de l'argent avec BF-DOC ?
                                        </button>
                                    </h2>
                                    <div
                                        id="genques-collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="genques-headingFour"
                                        data-bs-parent="#genques-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos laborum modi autem quibusdam neque maiores, ab totam eius quos praesentium harum et tempora aliquam nobis, corrupti assumenda? Tenetur, voluptas!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0 me-1">
                                    <i className="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-0 fw-semibold">
                                        Privé &amp; Securité
                                    </h5>
                                </div>
                            </div>

                            <div
                                className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                                id="privacy-accordion"
                            >
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="privacy-headingOne"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#privacy-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="privacy-collapseOne"
                                        >
                                            Mes données sont-t-elles securisés?
                                        </button>
                                    </h2>
                                    <div
                                        id="privacy-collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="privacy-headingOne"
                                        data-bs-parent="#privacy-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias corporis deserunt id architecto autem perferendis libero ratione voluptatem ipsam!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="privacy-headingTwo"
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#privacy-collapseTwo"
                                            aria-expanded="true"
                                            aria-controls="privacy-collapseTwo"
                                        >
                                            
                                            Comment changé mon mot de passe ?
                                        </button>
                                    </h2>
                                    <div
                                        id="privacy-collapseTwo"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="privacy-headingTwo"
                                        data-bs-parent="#privacy-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, labore dolorum? Suscipit inventore expedita praesentium ut corrupti quisquam saepe libero repellendus nobis at cumque, quibusdam ducimus ipsam culpa eligendi natus provident ipsa mollitia similique modi ullam animi amet quasi facere? Numquam, recusandae necessitatibus ab magnam ratione ducimus delectus animi vitae.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="privacy-headingThree"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#privacy-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="privacy-collapseThree"
                                        >
                                            Combien de temps existera mon compte ?
                                        </button>
                                    </h2>
                                    <div
                                        id="privacy-collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="privacy-headingThree"
                                        data-bs-parent="#privacy-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit temporibus voluptas deserunt, dolore repudiandae facere, neque, incidunt adipisci quos autem excepturi facilis placeat cumque illo officiis. Eos, provident sunt!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2
                                        className="accordion-header"
                                        id="privacy-headingFour"
                                    >
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#privacy-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="privacy-collapseFour"
                                        >
                                            Peux-t-on creé plusieurs compte?
                                        </button>
                                    </h2>
                                    <div
                                        id="privacy-collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="privacy-headingFour"
                                        data-bs-parent="#privacy-accordion"
                                    >
                                        <div className="accordion-body ff-secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet iure cum nemo alias corrupti quae non possimus totam minima tempora assumenda deleniti voluptate ipsam repellendus enim porro, velit quisquam!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-primary" id="reviews">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center">
                                <div>
                                    <i className="ri-double-quotes-l text-success display-3"></i>
                                </div>
                                <h4 className="text-white mb-5">
                                    <span className="text-success">Plus de 40k</span>+
                                    Etudiants(e) satisfaits
                                </h4>

                                <div
                                    className="swiper client-review-swiper rounded"
                                    dir="ltr"
                                >
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <div className="text-white-50">
                                                        <p className="fs-20 ff-secondary mb-1">
                                                            " Le contenu est exatement celui des docteurs. Les correcetions sont bien detailées et bien expliqués. C'est du beau travail.merci a l'equipe "
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next bg-white rounded-circle"></div>
                                    <div className="swiper-button-prev bg-white rounded-circle"></div>
                                    <div className="swiper-pagination position-relative mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 position-relative bg-light">
                <div className="container">
                    <div className="row text-center gy-4">
                        <div className="col-lg-3 col-6">
                            <div>
                                <h2 className="mb-2">
                                    <span
                                        className="counter-value"
                                        data-target="100"
                                    >
                                        15
                                    </span>
                                    +
                                </h2>
                                <div className="text-muted">
                                    Total universités
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div>
                                <h2 className="mb-2">
                                    <span
                                        className="counter-value"
                                        data-target="24"
                                    >
                                        5k+
                                    </span>
                                </h2>
                                <div className="text-muted">Total documents</div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div>
                                <h2 className="mb-2">
                                    <span
                                        className="counter-value"
                                        data-target="20.3"
                                    >
                                        30
                                    </span>
                                    k
                                </h2>
                                <div className="text-muted">
                                    Total specialité
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div>
                                <h2 className="mb-2">
                                    <span
                                        className="counter-value"
                                        data-target="50"
                                    >
                                        40K+
                                    </span>
                                </h2>
                                <div className="text-muted">Etudiants(e)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">
                                    Bon à savoir
                                </h3>
                                <p className="text-muted mb-4 ff-secondary">
                                    Comment fonctionne les publications des documents sur notre plateforme ?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-lg-4">
                            <div className="process-card mt-4">
                                <div className="process-arrow-img d-none d-lg-block">
                                    <img
                                        src="assets/images/landing/process-arrow-img.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="avatar-sm icon-effect mx-auto mb-4">
                                    <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                        <i className="ri-quill-pen-line"></i>
                                    </div>
                                </div>

                                <h5>Récoltes des documents</h5>
                                <p className="text-muted ff-secondary">
                                    Les documents sont recoltés généralement par les chefs de promotion ou des etudiants(e)
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="process-card mt-4">
                                <div className="process-arrow-img d-none d-lg-block">
                                    <img
                                        src="assets/images/landing/process-arrow-img.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="avatar-sm icon-effect mx-auto mb-4">
                                    <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                        <i className="ri-user-follow-line"></i>
                                    </div>
                                </div>

                                <h5>La révus</h5>
                                <p className="text-muted ff-secondary">
                                    Ces documents recoltés sont verifiés pour s'assurer de la pertinance du contenu.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="process-card mt-4">
                                <div className="avatar-sm icon-effect mx-auto mb-4">
                                    <div className="avatar-title bg-transparent text-success rounded-circle h1">
                                        <i className="ri-book-mark-line"></i>
                                    </div>
                                </div>

                                <h5>La publication</h5>
                                <p className="text-muted ff-secondary">
                                    Apres la révus, ces documents sont publier soit par les modarateurs, soit par les chefs de promotions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">
                                    Contactez-nous
                                </h3>
                                <p className="text-muted mb-4 ff-secondary">
                                    Laissez-nous un message en renseignant vos informations. Nous vous repondrons le plus tô possible
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {/* <div className="col-lg-4">
                            <div>
                                <div className="mt-4">
                                    <h5 className="fs-13 text-muted text-uppercase">
                                        Office Address 1:
                                    </h5>
                                    <div className="ff-secondary fw-semibold">
                                        4461 Cedar Street Moro, <br />
                                        AR 72368
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h5 className="fs-13 text-muted text-uppercase">
                                        Office Address 2:
                                    </h5>
                                    <div className="ff-secondary fw-semibold">
                                        2467 Swick Hill Street <br />
                                        New Orleans, LA
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h5 className="fs-13 text-muted text-uppercase">
                                        Working Hours:
                                    </h5>
                                    <div className="ff-secondary fw-semibold">
                                        9:00am to 6:00pm
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-8">
                            <div className="card p-3">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label fs-13"
                                                >
                                                    Nom Prénom
                                                </label>
                                                <input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-control bg-light border-light"
                                                    placeholder="Votre nom et prénom*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="form-label fs-13"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="form-control bg-light border-light"
                                                    placeholder="Votre email*"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="subject"
                                                    className="form-label fs-13"
                                                >
                                                    Sujet
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-light"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Votre sujet.."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="comments"
                                                    className="form-label fs-13"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    name="comments"
                                                    id="comments"
                                                    rows="3"
                                                    className="form-control bg-light border-light"
                                                    placeholder="Votre message..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-end">
                                            <input
                                                type="submit"
                                                id="submit"
                                                name="send"
                                                className="submitBnt btn btn-primary"
                                                value="Envoyez Mon Message"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-primary position-relative">
                <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-sm">
                            <div>
                                <h4 className="text-white mb-0 fw-semibold">
                                    Inscrivez-vous maintenant ou connectez-vous pour profiter des avantages offertes par BF-DOC.
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-auto">
                            <div>
                                <Link
                                    to="/inscription"
                                    className="btn bg-gradient btn-success m-1"
                                >
                                    <i className="bx bx-run align-middle me-1"></i>
                                    Je m'inscris
                                </Link>

                                <Link
                                    to="/connexion"
                                    className="btn bg-gradient btn-info"
                                >
                                    <i className="ri-user-shared-line align-middle me-1"></i>
                                    Connexion
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default HomePage;
