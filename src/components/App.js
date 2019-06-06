import React, { Component } from "react";
import Navbar from "./Navigation";

class App extends Component {
  state = {
    user_name: "",
    stock: [],
    portfolio: {
      cash: 10000,
      shares: 0,
      stock: ""
    }
  };

  componentDidMount() {
    fetch("http://localhost:4000/api/random_stock")
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
      </>
    );
  }
}

export default App;
