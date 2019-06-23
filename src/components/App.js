import React, { Component } from "react";
import Navbar from "./Navigation";
import Chart from "./Chart";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Chart />
      </>
    );
  }
}

export default App;
