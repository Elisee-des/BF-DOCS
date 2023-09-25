import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NoMatchPage = () => {
    const navigate = useNavigate();
    return (
        <div class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="auth-page-content overflow-hidden p-0">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-4 text-center">
                        <div class="error-500 position-relative">
                            <img src="assets/images/error500.png" alt="" class="img-fluid error-500-img error-img"/>
                            <h1 class="title text-muted">403</h1>
                        </div>
                        <div>
                            <h4>Interdit!</h4>
                            <p class="text-muted w-75 mx-auto">Vous n'avez pas suffisamment d'autorisations pour effectuer cette action.</p>
                            <Link to="/admin/tableau-de-bord"  class="btn btn-success"><i class="mdi mdi-home me-1"></i>Revenir au tableau de bord</Link>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
        
    </div>
    );
}

export default NoMatchPage;
