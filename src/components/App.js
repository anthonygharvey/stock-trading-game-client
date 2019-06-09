import React, { Component } from "react";
import Navbar from "./Navigation";
import Chart from "./Chart";

const API_URL = process.env.REACT_APP_API_URL;
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
