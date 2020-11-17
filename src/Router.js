import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Error from "./pages/Error";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters" exact component={Characters} />
      <Route path="/character/:id" exact component={Character} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
