import React, { Component } from "react";
import Navbar from "./Navigation";
import Chart from "./Chart";

const API_URL = process.env.REACT_APP_API_URL;
class App extends Component {
  state = {
    user_name: "",
    stock: {
      symbol: "",
      prices: [{ x: "", y: 0 }]
    },
    portfolio: {
      cash: 10000,
      shares: 0,
      stock: ""
    }
  };

  componentDidMount() {
    fetch(`${API_URL}/random_stock`)
      .then(response => response.json())
      .then(stock =>
        this.setState(prevState => ({
          ...prevState,
          stock: stock,
          portfolio: {
            ...prevState.portfolio,
            stock: stock.symbol
          }
        }))
      );
  }

  render() {
    return (
      <>
        <Navbar />
        <Chart stock={this.state.stock} />
      </>
    );
  }
}

export default App;
