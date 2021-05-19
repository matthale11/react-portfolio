import React from "react";
// import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Project from "./components/Project/index";
// import Bio from "./pages/bio/index";

function App() {
  return (
    // <Router>
      <div className="App">
        <Header />
        <Project />
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
