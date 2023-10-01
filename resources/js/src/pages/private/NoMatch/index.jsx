import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NoMatchPage = () => {
    const navigate = useNavigate();
    return (
        <div className="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="auth-page-content overflow-hidden p-0">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-4 text-center">
                        <div className="error-500 position-relative">
                            <img src="assets/images/error500.png" alt="" className="img-fluid error-500-img error-img"/>
                            <h1 className="title text-muted">403</h1>
                        </div>
                        <div>
                            <h4>Interdit!</h4>
                            <p className="text-muted w-75 mx-auto">Vous n'avez pas suffisamment d'autorisations pour effectuer cette action.</p>
                            <Link to="/admin/tableau-de-bord"  className="btn btn-success"><i className="mdi mdi-home me-1"></i>Revenir au tableau de bord</Link>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
        
    </div>
    );
}

export default NoMatchPage;
