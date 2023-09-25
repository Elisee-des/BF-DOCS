import React, { useEffect, useState } from "react"
import { getUserData } from "../../utility/Utils"
import { Dropdown } from "react-bootstrap"
import AuthService from "../../services/authService"
import profilImage from '../../assets/images/users/avatar-1.jpg'

const Header = () => {

    const [userProfile, setUserProfile] = useState({})
    const [url, setUrl] = useState({})
        const logout=()=> {
            AuthService.logout();
        }
        useEffect(() => {
            setUrl(window.location.pathname.replace('/admin/', ''))
            if (getUserData()) {
                setUserProfile(getUserData().infos_user);
            }
        }, [])

    return (
        <header id="page-topbar" className="box-shadow">
            <div className="layout-width box-shadow">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box horizontal-logo">
                        {/* <a href="/universités/université-norbert-zongo" class="logo text-success fw-bold fs-23">
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22"/>
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="17"/>
                            </span>
                            BF-DOCS
                        </a> */}
                        <button id="sidenav-toggler" data-mdb-toggle="sidenav" data-mdb-target="#mdb-sidenav" type="button" class="btn shadow-0 p-0 me-3" aria-expanded="false"><i class="fas fa-bars fa-lg"></i></button>

                        </div>

                    </div>

                    <div className="d-flex align-items-center">

                        {/* <div className="dropdown d-md-none topbar-head-dropdown header-item">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                                id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="bx bx-search fs-22"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..."
                                                aria-label="Recipient's username" />
                                            <button className="btn btn-primary" type="submit"><i
                                                className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        */}
                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <Dropdown>
                                <Dropdown.Toggle variant="default">
                                <span className="d-flex align-items-center">
                                    <img className="rounded-circle header-profile-user" src={profilImage}
                                        alt="Header Avatar" />
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{userProfile?.nom} {userProfile?.prenom}</span>
                                    </span>
                                </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/admin/profile">Profil</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=>logout()}>Deconnexion</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div class="layout-width container-fluid d-flex justify-content-between">
                <button id="sidenav-toggler" data-mdb-toggle="sidenav" data-mdb-target="#mdb-sidenav" type="button" class="btn shadow-0 p-0 me-3" aria-expanded="false"><i class="fas fa-bars fa-lg"></i></button>
                
                <div id="mdb-5-search-container">
                <div id="mdb-5-search-dropdown" class="rounded shadow-5">
                    <ul id="mdb-5-search-list" class="list-unstyled mb-0 perfect-scrollbar ps"><div class="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div class="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div></div><div class="ps__rail-y" style={{top: "0px", right: "0px"}}><div class="ps__thumb-y" tabindex="0" style={{top: "0px", height: "1px"}}></div></div></ul>
                    <hr class="my-0"/>
                    <p class="text-muted small text-end pe-3 mt-3">Recherche rapide: <strong id="mdb-5-search-count"></strong></p>
                </div>
                </div>
                <div className="dropdown ms-sm-3 header-item topbar-user">
                            <Dropdown>
                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                <span className="d-flex align-items-center">
                                    <img className="rounded-circle header-profile-user" src={profilImage}
                                        alt="Header Avatar" />
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{userProfile?.nom} {userProfile?.prenom}</span>
                                    </span>
                                </span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/admin/profile">Profil</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={()=>logout()}>Deconnexion</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
            </div> */}
                
    
        </header>
    );
}

export default Header