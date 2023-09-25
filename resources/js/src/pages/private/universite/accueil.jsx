import React from 'react'
import img1 from "../../../assets/images/ujkz.jpeg";
import img2 from "../../../assets/images/unz1.jpeg";
import { Link } from 'react-router-dom';

function AccueilPage() {
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
                                <li className="breadcrumb-item active">Accueil</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row g-4 mb-3">
                <div className="col-sm-auto">
                    <div>
                        <a href="apps-projects-create.html" className="btn btn-success"><i className="ri-add-line align-bottom me-1"></i> Ajouter une université</a>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="d-flex justify-content-sm-end gap-2">
                        <div className="search-box ms-2">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <i className="ri-search-line search-icon"></i>
                        </div>

                        {/* <select className="form-control w-md" data-choices data-choices-search-false>
                            <option value="All">All</option>
                            <option value="Today">Today</option>
                            <option value="Yesterday" selected>Yesterday</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="This Month">This Month</option>
                            <option value="Last Year">Last Year</option>
                        </select> */}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-3 col-sm-6 project-card">
                    <Link to='/universités/université-norbert-zongo'>
                    <div className="card card-height-100">
                        <div className="card-body">
                            <div className="d-flex flex-column h-100">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted mb-4">Ajout:19/02/2023</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="d-flex gap-1 align-items-center">
                                            <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn">
                                                <span className="avatar-title bg-transparent fs-15">
                                                    <i className="ri-star-fill"></i>
                                                </span>
                                            </button>
                                            <div className="dropdown">
                                                <button className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <i data-feather="more-horizontal" className="icon-sm"></i>
                                                </button>

                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="apps-projects-overview.html"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a>
                                                    <a className="dropdown-item" href="apps-projects-create.html"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Remove</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="avatar-sm">
                                            <span className="avatar-title bg-soft-warning rounded p-2">
                                                <img src={img1} alt="" className="img-fluid"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-dark">Université Joseph Ki Zerbo(UJZK)</a></h5>
                                        <p className="text-muted text-truncate-two-lines mb-3">Create a Brand logo design for a velzon admin.</p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <div className="d-flex mb-2">
                                        <div className="flex-grow-1">
                                            <div>Documents</div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className=''>4000<i className="bx bxs-file-pdf align-bottom me-1 text-muted"></i> </div>
                                        </div>
                                    </div>
                                    <div className="progress progress-sm animated-progress">
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                    </div>
                                </div>
                                <div className="mt-auto pt-2">
                                    <div className="d-flex mb-2">
                                        <div className="flex-grow-1">
                                            <div>Etudiants</div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div><i className="ri-team-line align-bottom me-1 text-muted"></i> 12020</div>
                                        </div>
                                    </div>
                                    <div className="progress progress-sm animated-progress">
                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent border-top-dashed py-2">
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <div className="avatar-group">
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Darline Williams">
                                            <div className="avatar-xxs">
                                                <img src="../images/users/avatar-2.jpg" alt="" className="rounded-circle img-fluid"/>
                                            </div>
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                            <div className="avatar-xxs">
                                                <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                    +
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="text-muted">
                                        <i className="ri-calendar-event-fill me-1 align-bottom"></i> 10 Jul, 2021
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    </Link>
                </div>

            </div>

        </div>  
    </React.Fragment>
  )
}

export default AccueilPage