import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../authentification/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import About from "./views/About/About.js";
import Interiors from "./views/Interiors/Interiors.js";
import Art from "./views/Art/Art.js";
import Luxury from "./views/Luxury/Luxury.js";
import Schedule from "./views/Schedule/Schedule.js";
import Request from "./views/Request/Request.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ClientPage from './views/ClientPage/ClientPage';
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//null   Global Access
//true   Private Access
//false  Users Can't Access

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/about" component={Auth(About, null)} />
          <Route exact path="/art" component={Auth(Art, null)} />
          <Route exact path="/luxury" component={Auth(Luxury, null)} />
          <Route exact path="/interiors" component={Auth(Interiors, null)} />
          <Route exact path="/schedule" component={Auth(Schedule, true)} />
          <Route exact path="/request" component={Auth(Request, null)} />
          <Route exact path="/clientpage" component={Auth(ClientPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
