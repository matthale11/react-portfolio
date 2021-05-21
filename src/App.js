import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Project from "./pages/Project/index";
import Bio from "./pages/Bio/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Project} />
          <Route exact path="/bio" component={Bio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
