import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="bg-neutral-800 h-screen p-5 text-white App-header">
        <h1 className="text-7xl">Portfolio !</h1>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
