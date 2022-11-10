import React from 'react';
import ReactDOM from 'react-dom/client';
// import BasicTabs from './pages/reports/incidents.js'
import Login from './pages/login/login.js';
// import FloorOneIncidents from './pages/staff/floorOneIncidents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Login />
  </React.StrictMode>
);
