import React, { Component } from "react";
import Navbar from "./Navigation";

const API_URL = process.env.REACT_APP_API_URL;
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
      </>
    );
  }
}

export default App;
