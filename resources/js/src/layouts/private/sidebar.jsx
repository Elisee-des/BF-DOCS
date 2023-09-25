import React, { useState } from 'react';

import {  Link } from 'react-router-dom';

function Sidebar() {

  return (
<>
            <div class="app-menu navbar-menu">
            <div class="navbar-brand-box">
                <a href="/universités/université-norbert-zongo" class="logo text-success fw-bold fs-23">
                    {/* <span class="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <span class="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="17"/>
                    </span> */}
                    BF-DOCS
                </a>
                <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i class="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div class="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul class="navbar-nav" id="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                <i class="ri-pie-chart-2-fill "></i> <span data-key="t-dashboards">Tableau de bord</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link menu-link" href="#sidebarUniversites" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUniversites">
                                <i class="ri-hotel-fill "></i> <span data-key="t-universites">Universités</span>
                            </a>
                            <div class="collapse menu-dropdown" id="sidebarUniversites">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <Link to="" class="nav-link" data-key="t-analytics"> Accueil </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link menu-link" href="#sidebarCaise" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCaise">
                                <i class="ri-wallet-3-fill "></i> <span data-key="t-dashboards">La Caise</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link menu-link" href="#" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarParametre">
                                <i class="bx bx-wrench"></i> <span data-key="t-dashboards">Paramètre</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="sidebar-background"></div>
        </div>
        </>
  );
}

export default Sidebar;