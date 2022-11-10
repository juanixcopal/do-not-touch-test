import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicTabs from './pages/reports/incidents.js'
// import Login from './pages/login/login.js';
// import FloorOneIncidents from './pages/staff/floorOneIncidents';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css"
import './assets/scss/paper-dashboard.scss?v=0.1.0'
import "./assets/demo/demo.css"
import 'perfect-scrollbar/css/perfect-scrollbar.css'

import AdminLayout from './layouts/Admin'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BasicTabs />
  </React.StrictMode>
);


{/* <React.StrictMode>
      <BasicTabs />
  </React.StrictMode> */}

  // <BrowserRouter>
  //     <Switch>
  //       <Route path="/user" render={(props) => <AdminLayout {...props}/>} />
  //       <Redirect to="/user/planta1" />
  //     </Switch>
  // </BrowserRouter>