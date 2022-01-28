import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import signInPage from "./Pages/signIn";


function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" component={Home} exact />
        <Route  path="/signin" component={signInPage} exact />
      </Switch>    
    </Router>
  );
}

export default App;
