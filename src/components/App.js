import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./Navigation";
import Portfolio from "./Portfolio";
import Chart from "./Chart";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route path="/" exact component={Navbar} />
          <Route path="/" exact component={Portfolio} />
          <Route path="/" exact component={Chart} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
