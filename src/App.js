import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./Table";
import Details from "./Details";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/details/:name" component={Details} />
          <Route path="/" component={Table} />
        </Switch>
      </Router>
    </div>
  );
}
