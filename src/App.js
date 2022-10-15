import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Portfolio</h2>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
