import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navigation";
import PortfolioContainer from "./PortfolioContainer";
import Chart from "./Chart";
import About from "./About";
import Leaderboard from "./Leaderboard";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <BrowserRouter>
          <Route path="/" exact component={PortfolioContainer} />
          <Route path="/" exact component={Chart} />
          <Route path="/about" exact component={About} />
          <Route path="/leaderboard" exact component={Leaderboard} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
