import React from "react";
import "./App.css";
import NavBar from "./BroadbandComponents/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
