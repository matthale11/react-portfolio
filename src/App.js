import React from "react";
// import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Project from "./pages/Project/index";
import Bio from "./pages/Bio/index";
import "./App.css";

function App() {
  return (
    // <Router>
      <div className="App">
        <Header />
        <Bio />
        <Project />
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
