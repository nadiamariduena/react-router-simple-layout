import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />} />
          <Route
            path={() => "/main" || "/admin" || "/any-other-word"}
            component={Home}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
