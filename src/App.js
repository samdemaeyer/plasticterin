import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import VijfNaTwaalf from './routes/VijfNaTwaalf';

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
              plastic-terin
            </Route>
            <Route exact path="/waanzin">
              waanzin
            </Route>
            <Route exact path="/strijders">
              strijders
            </Route>
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
