import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { Products } from "./Products/Products";
import { Orders } from "./Orders/Orders";
import { Home } from "./Home/Home";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div style={{ marginTop: "20px" }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/orders" component={Orders} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
