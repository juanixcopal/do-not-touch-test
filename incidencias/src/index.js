import React from 'react';
import ReactDOM from 'react-dom/client';
// import BasicTabs from './pages/reports/incidents.js'
// import Login from './pages/login/login.js';
import IncidentsViews from './pages/staff/incidentsViews.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IncidentsViews />
  </React.StrictMode>
);
