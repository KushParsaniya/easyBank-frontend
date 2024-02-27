import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './utils/AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <AppRoutes />
    </>
);


reportWebVitals();
