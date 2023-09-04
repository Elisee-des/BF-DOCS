import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import MainRoutes from './routes';

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