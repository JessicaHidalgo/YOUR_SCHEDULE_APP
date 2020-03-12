import React from "react";
import Homecontent from "./Components/Homecontent";
import "./App.css";
import Home from "./Components/Home";
import Forms from "./Components/Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Components/Search";

import Add from "./Components/Add";
function App() {
  return (
    
      <Router>
        <Home></Home>
        <Switch>
          <Route path="/Sigin" component={Forms}/>
          <Route path="/Search" component={Search}/>
          <Route path="/Add" component={Add}/>
          <Route path="/" component={Homecontent}/>
        </Switch>
      </Router>
   
  );
}

export default App;
