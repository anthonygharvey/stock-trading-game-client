import React, { Component } from "react";
import Navbar from "./Navigation";
import Portfolio from "./Portfolio";
import Chart from "./Chart";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Portfolio />
        <Chart />
      </>
    );
  }
}

export default App;
