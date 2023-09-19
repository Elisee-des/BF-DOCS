import React from 'react'
import pdf1 from "../../../assets/images/pdf1.png";
import pdf2 from "../../../assets/images/pdf2.png";

function index() {
  return (
   <>
     <div className="page-content">
                <div className="container-fluid">

                    <div className="card">
                        <div className="card-header border-0 rounded">
                            <div className="row g-2">
                                <div className="col-xl-3">
                                    <div className="search-box">
                                        <input type="text" className="form-control search" placeholder="Chercher un documement...."/> <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                                <div className="col-xl-2 ms-auto">
                                    <div>
                                        <select className="form-control" data-choices data-choices-search-false>
                                            <option value="">Selectionner une université</option>
                                            <option value="Retailer">Université Jopseph Ki Zerbo</option>
                                            <option value="Food Service">Univeristé Norbert Zongo</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-auto">
                                    <div className="hstack gap-2">
                                        <button type="button" className="btn btn-danger"><i className="ri-equalizer-fill me-1 align-bottom"></i> Filtré</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-xl-3 col-lg-6">
                            <div className="card ribbon-box right overflow-hidden">
                                <div className="card-body text-center p-4">
                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom"></i> <span className="trending-ribbon-text">UNZ</span></div>
                                    <img src={pdf2} alt="" height="45"/>
                                    <h5 className="mb-1 mt-4"><a href="#" className="link-primary">Anglais</a></h5>
                                    <p className="text-muted mb-0">Session normal(<span className="link-danger">Corrigé</span>)</p>
                                    <p className="text-muted mb-0">Filière: Anglais (<span className="link-success">UNZ</span>)</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div id="chart-seller1" data-colors='["--vz-danger"]'></div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 border-end-dashed border-end">
                                            <span className="text-muted">Année Académique</span>
                                            <h5>2020-2021</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-muted">Taille du fichier</span>
                                            <h5>2M</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="btn btn-success w-100">Telecharger</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card ribbon-box right overflow-hidden">
                                <div className="card-body text-center p-4">
                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom"></i> <span className="trending-ribbon-text">UNZ</span></div>
                                    <img src={pdf2} alt="" height="45"/>
                                    <h5 className="mb-1 mt-4"><a href="#" className="link-primary">Anglais</a></h5>
                                    <p className="text-muted mb-0">Session normal(<span className="link-danger">Examen</span>)</p>
                                    <p className="text-muted mb-0">Filière: Histoire Archeologie (<span className="link-success">UNZ</span>)</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div id="chart-seller1" data-colors='["--vz-danger"]'></div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 border-end-dashed border-end">
                                            <span className="text-muted">Année Académique</span>
                                            <h5>2019-2020</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-muted">Taille du fichier</span>
                                            <h5>2M</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="btn btn-success w-100">Telecharger</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card ribbon-box right overflow-hidden">
                                <div className="card-body text-center p-4">
                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom"></i> <span className="trending-ribbon-text">UJKZ</span></div>
                                    <img src={pdf2} alt="" height="45"/>
                                    <h5 className="mb-1 mt-4"><a href="#" className="link-primary">Electrostatique</a></h5>
                                    <p className="text-muted mb-0">Session de rattrapage(<span className="link-danger">Examen</span>)</p>
                                    <p className="text-muted mb-0">Filière: Science Economique de Gestion (<span className="link-success">UJKZ</span>)</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div id="chart-seller1" data-colors='["--vz-danger"]'></div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 border-end-dashed border-end">
                                            <span className="text-muted">Année Académique</span>
                                            <h5>2022-2023</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-muted">Taille du fichier</span>
                                            <h5>1M</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="btn btn-success w-100">Telecharger</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card ribbon-box right overflow-hidden">
                                <div className="card-body text-center p-4">
                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom"></i> <span className="trending-ribbon-text">UJKZ</span></div>
                                    <img src={pdf2} alt="" height="45"/>
                                    <h5 className="mb-1 mt-4"><a href="#" className="link-primary">Equilibre Chimique</a></h5>
                                    <p className="text-muted mb-0">Session normal(<span className="link-danger">Corrigé</span>)</p>
                                    <p className="text-muted mb-0">Filière: Science de la vie et de la terre (<span className="link-success">UJKZ</span>)</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div id="chart-seller1" data-colors='["--vz-danger"]'></div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 border-end-dashed border-end">
                                            <span className="text-muted">Année Académique</span>
                                            <h5>2019-2020</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-muted">Taille du fichier</span>
                                            <h5>1M</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="btn btn-success w-100">Telecharger</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card ribbon-box right overflow-hidden">
                                <div className="card-body text-center p-4">
                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom"></i> <span className="trending-ribbon-text">UNZ</span></div>
                                    <img src={pdf2} alt="" height="45"/>
                                    <h5 className="mb-1 mt-4"><a href="#" className="link-primary">Statistique</a></h5>
                                    <p className="text-muted mb-0">Session normal(<span className="link-danger">Corrigé</span>)</p>
                                    <p className="text-muted mb-0">Filière: Maths Physique Chimique Informatique (<span className="link-success">UNZ</span>)</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div id="chart-seller1" data-colors='["--vz-danger"]'></div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 border-end-dashed border-end">
                                            <span className="text-muted">Année Académique</span>
                                            <h5>2018-2019</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-muted">Taille du fichier</span>
                                            <h5>3M</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="btn btn-success w-100">Telecharger</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="card ribbon-box right overflow-hidden">
                                <div className="card-body text-center p-4">
                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom"></i> <span className="trending-ribbon-text">UNZ</span></div>
                                    <img src={pdf2} alt="" height="45"/>
                                    <h5 className="mb-1 mt-4"><a href="#" className="link-primary">Literrature africaine</a></h5>
                                    <p className="text-muted mb-0">Session normal(<span className="link-danger">Examen</span>)</p>
                                    {/* <p className="text-muted mb-0">Université Joseph Ki Zerbo</p> */}
                                    <p className="text-muted mb-0">Filière: Histoire Archeologie (<span className="link-success">UNZ</span>)</p>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div id="chart-seller1" data-colors='["--vz-danger"]'></div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 border-end-dashed border-end">
                                            <span className="text-muted">Année Académique</span>
                                            <h5>2018-2019</h5>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="text-muted">Taille du fichier</span>
                                            <h5>2M</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href="#" className="btn btn-success w-100">Telecharger</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>

                    <div className="row g-0 text-center text-sm-start align-items-center mb-3">
                        <div className="col-sm-6">
                            <div>
                                <p className="mb-sm-0">Telecharger plus de 5000 documents avec un compte</p>
                            </div>
                        </div> 
                        <div className="col-sm-6">
                            <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                <li className="page-item active"> <a href="#" className="page-link">Je m'incris maitenant</a> </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
   </>
  )
}

export default index