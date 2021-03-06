import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Html from "./Html";
import Css from "./Css";
import Javascript from "./Javascript";
import ReactJs from "./ReactJs";
import Interview from "./Interview";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Html />
          </Route>
          <Route path="/css">
            <Css />
          </Route>
          <Route path="/javascript">
            <Javascript />
          </Route>
          <Route path="/React">
            <ReactJs />
          </Route>
          <Router path="/After">
            <Interview />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
