import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>
    <NavBar/>
    <Switch>
    <Route component={Home} exact={true} path="/"/>
    <Route component={Movies} exact={true} path="/movies"/>
    <Route component={Directors} exact={true} path="/directors"/>
    <Route component={Actors} exact={true} path="/actors"/>
    </Switch>
  </div>
  );
}

export default App;
