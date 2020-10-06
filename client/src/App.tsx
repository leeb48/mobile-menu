import React from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppetizerMenu from "./components/appetizer-menu/AppetizerMenu";
import SoftDrinksMenu from "./components/drinks-menu/SoftDrinksMenu";

// Components
import LandingPage from "./components/layout/LandingPage";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/appetizers" component={AppetizerMenu} />
        <Route exact path="/soft-drinks" component={SoftDrinksMenu} />
      </Switch>
    </Router>
  );
}

export default App;
