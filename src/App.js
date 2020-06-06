import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import VijfNaTwaalf from './routes/VijfNaTwaalf';
import PlasticTerin from './routes/PlasticTerin';
import Waanzin from './routes/Waanzin';
import Strijders from './routes/Strijders';


function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container container-main">
        <Switch>
            <Route exact path="/">
              <VijfNaTwaalf />
            </Route>
            <Route exact path="/plastic-terin">
              <PlasticTerin />
            </Route>
            <Route exact path="/waanzin">
              <Waanzin />
            </Route>
            <Route exact path="/strijders">
              <Strijders />
            </Route>
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
