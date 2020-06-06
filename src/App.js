import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import VijfNaTwaalf from './routes/VijfNaTwaalf';
import PlasticTerin from './routes/PlasticTerin';
import Waanzin from './routes/Waanzin';
import Strijders from './routes/Strijders';
import Workshop from './routes/projects/Workshop';
import GepaktEnGezakt from './routes/projects/GepaktEnGezakt';
import Trashwerp from './routes/projects/Trashwerp';
import Eccosentials from './routes/projects/Eccosentials';
import ToBeAntwerp from './routes/projects/ToBeAntwerp';
import MeiPlasticVrij from './routes/projects/MeiPlasticVrij';
import CleanUps from './routes/projects/CleanUps';
import WachtenOpNOplossing from './routes/projects/WachtenOpNOplossing';
import IkHoopDatGeGoedSlaaptVannacht from './routes/projects/IkHoopDatGeGoedSlaaptVannacht';


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
          <Route exact path="/projects/workshop">
            <Workshop />
          </Route>
          <Route exact path="/projects/gepakt-en-gezakt">
            <GepaktEnGezakt />
          </Route>
          <Route exact path="/projects/gepakt-en-gezakt">
            <GepaktEnGezakt />
          </Route>
          <Route exact path="/projects/trashwerp">
            <Trashwerp />
          </Route>
          <Route exact path="/projects/eccosentials">
            <Eccosentials />
          </Route>
          <Route exact path="/projects/to-be-antwerp">
            <ToBeAntwerp />
          </Route>
          <Route exact path="/projects/mei-plastic-vrij">
            <MeiPlasticVrij />
          </Route>
          <Route exact path="/projects/clean-ups">
            <CleanUps />
          </Route>
          <Route exact path="/projects/wachten-op-n-oplossing">
            <WachtenOpNOplossing />
          </Route>
          <Route exact path="/projects/ik-hoop-dat-ge-goed-slaapt-vannacht">
            <IkHoopDatGeGoedSlaaptVannacht />
          </Route>
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
