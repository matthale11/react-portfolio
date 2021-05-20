import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Project from "./pages/Project/index";
import Bio from "./pages/Bio/index";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Project} />
          <Route path="/bio" component={Bio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
