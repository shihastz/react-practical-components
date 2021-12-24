import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parallax from "./components/Parallax";
import DragAndDrop from "./components/DragAndDrop";
import Wave from "./components/Wave";
import Sample from "./components/Sample";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/parallax">
          <Parallax />
        </Route>
        <Route path="/draganddrop">
          <DragAndDrop />
        </Route>
        <Route path="/wave">
          <Wave />
        </Route>
        <Route exact path="/">
          <DragAndDrop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
