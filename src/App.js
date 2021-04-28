import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Html from "./Html";
import Css from "./Css";
import Javascript from "./Javascript";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
