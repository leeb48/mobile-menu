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

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/appetizers" component={AppetizerMenu} />
        <Route exact path="/soft-drinks" component={SoftDrinksMenu} />
        <Route exact path="/wine-menu" component={WineMenu} />
        <Route exact path="/beer-menu" component={BeerMenu} />
      </Switch>
    </Router>
  );
}

export default App;
