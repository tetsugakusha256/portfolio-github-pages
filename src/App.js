import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import FastText from "./components/FastText";
import Project from "./components/Project";
import ProjectsView from "./components/ProjectsView";
import TechView from "./components/TechView";
import ContactView from "./components/ContactView";
import TimelineView from "./components/TimelineView";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <div className="p-5 text-white App-header">
          <h1 className="text-7xl">Hi, my name is anon !</h1>
          <ProjectsView />
          <TimelineView />
          <TechView />
          <ContactView />
        </div>
      </div>
    </div>
  );
}

export default App;
