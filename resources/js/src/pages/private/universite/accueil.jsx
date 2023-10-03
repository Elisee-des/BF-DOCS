import React, { useEffect, useState } from "react";
import img1 from "../../../assets/images/ujkz.jpeg";
import img2 from "../../../assets/images/unz1.jpeg";
import { Link } from "react-router-dom";
import universiteService from "../../../services/universiteService";

function AccueilPage() {
    const [universites, setUniversite] = useState([]);
    const maxlength = 100;

    const getUniversites = () => {
        universiteService.getUniversites().then((response) => {
            console.log("universites->", response);
            setUniversite(response.data.universites);
        });
    };

    console.log("uni=>", universites);
    
    useEffect(() => {
        getUniversites();
    }, []);
    
    const renderListeUniversites = (universites) => {
        return universites.map((universite) => (
            <div class="col-xxl-4 project-card" key={universite?.id}>
                <div className="card">
                    <div class="border-start p-4 h-100 d-flex flex-column">
                        <div class="w-100">
                            <div class="d-flex align-items-center">
                                <img
                                    src={img1}
                                    class="img-fluid avatar-xs rounded object-cover" style={{height: "50px", width:"50px"}}
                                    alt=""
                                />
                                <div class="ms-3 flex-grow-1">
                                    <h5 class="fs-16 mb-1">
                                        {universite?.nom}
                                    </h5>
                                    <p class="text-muted mb-0">{universite?.abreviation}</p>
                                </div>
                            </div>

                            <h3 class="ff-secondary fw-bold mt-4">
                                15292 Etudiants
                            </h3>

                            <h6 className="text-muted">Ville : <strong>{universite?.ville?.nom}</strong></h6>
                            <h6 className="text-muted mt-2">President actuel : <strong>{universite?.president_nom} {universite?.president_prenom}</strong></h6>

                            <p class="text-muted">
                                {universite?.petit_decription.length > 100 ? `${universite?.petit_decription.slice(0, 100)}...` : universite?.petit_decription}
                            </p>

                            <div class="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <p class="fs-14 text-muted mb-1">
                                        Total devoirs(normal)
                                    </p>
                                    <h4 class="fs-20 ff-secondary fw-semibold mb-0">
                                        342
                                    </h4>
                                </div>

                                <div>
                                    <p class="fs-14 text-muted mb-1">
                                    Total corrections(normal)
                                    </p>
                                    <h4 class="fs-20 ff-secondary fw-semibold mb-0">
                                        300
                                    </h4>
                                </div>
                            </div>

                            <div class="row mt-4 pt-2">
                                <div class="col">
                                    <a
                                        href="apps-nft-item-details.html"
                                        class="btn btn-success w-100"
                                    >
                                        Voir Details
                                    </a>
                                </div>
                                <div class="col">
                                    <button class="btn btn-primary w-100">
                                        Editer infos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">Liste des universités</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    {/* <li className="breadcrumb-item"><a href="#">Accueil</a></li> */}
                                    <li className="breadcrumb-item active">
                                        Accueil
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-3">
                    <div className="col-sm-auto">
                        <div>
                            <Link
                                to={`/admin/université/ajout`}
                                className="btn btn-success"
                            >
                                <i className="ri-add-line align-bottom me-1"></i>{" "}
                                Ajouter une université
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="d-flex justify-content-sm-end gap-2">
                            <div className="search-box ms-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {universites && renderListeUniversites(universites)}
                </div>
            </div>
        </React.Fragment>
    );
}

export default AccueilPage;
