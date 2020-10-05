import React from "react";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppetizerMenu from "./components/appetizer-menu/AppetizerMenu";

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
      </Switch>
    </Router>
  );
}

export default App;
