import React from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import LandingPage from "./components/layout/LandingPage";
import Navbar from "./components/layout/Navbar";
import WineMenu from "./components/drinks-menu/WineMenu";
import BeerMenu from "./components/drinks-menu/BeerMenu";
import AppetizerMenu from "./components/appetizer-menu/AppetizerMenu";
import SoftDrinksMenu from "./components/drinks-menu/SoftDrinksMenu";
import SakeMenu from "./components/drinks-menu/SakeMenu";
import NigiriMenu from "./components/nigiri-menu/NirigiMenu";
import HandOrCutRollsMenu from "./components/roll-menu/HandOrCutRollsMenu";
import SpecialRollsMenu from "./components/roll-menu/SpecialRollsMenu";
import ExtraMenu from "./components/extra-menu/ExtraMenu";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/appetizer-menu" component={AppetizerMenu} />
        <Route exact path="/soft-drinks" component={SoftDrinksMenu} />
        <Route exact path="/wine-menu" component={WineMenu} />
        <Route exact path="/beer-menu" component={BeerMenu} />
        <Route exact path="/sake-menu" component={SakeMenu} />
        <Route exact path="/nigiri-menu" component={NigiriMenu} />
        <Route exact path="/special-rolls-menu" component={SpecialRollsMenu} />
        <Route
          exact
          path="/hand-or-cut-rolls-menu"
          component={HandOrCutRollsMenu}
        />
        <Route exact path="/extra-menu" component={ExtraMenu} />
      </Switch>
    </Router>
  );
}

export default App;
