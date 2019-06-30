import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./Navigation";
import Portfolio from "./Portfolio";
import Chart from "./Chart";
import About from "./About";
import Leaderboard from "./Leaderboard";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route path="/" exact component={Navbar} />
          <Route path="/" exact component={Portfolio} />
          <Route path="/" exact component={Chart} />
          <Route path="/about" exact component={About} />
          <Route path="/leaderboard" exact component={Leaderboard} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
