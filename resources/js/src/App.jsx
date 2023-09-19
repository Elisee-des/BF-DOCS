import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import MainRoutes from './routes';
import "./assets/libs/jsvectormap/css/jsvectormap.min.css";
import "./assets/libs/swiper/swiper-bundle.min.css";
import "./assets/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/icons.min.css";
import "./assets/css/app.min.css";
import "./assets/css/custom.min.css";
import './assets/css/_datatables.css';
import "./assets/css/custom.css";
import './assets/js/layout.js';
import './assets/libs/apexcharts/apexcharts.min.js';
import './assets/libs/swiper/swiper-bundle.min.js';
import './assets/libs/apexcharts/apexcharts.min.js';
import './assets/js/plugins.js';
import './assets/js/pages/plugins/lord-icon-2.1.0.js';
import './assets/libs/feather-icons/feather.min.js';
// import './assets/libs/node-waves/waves.min.js';
import './assets/libs/simplebar/simplebar.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import'./assets/js/pages/datatables.init.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import './assets/js/app.js';

export default function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </React.StrictMode>
    );
}

if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<App />)
}