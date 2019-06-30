import React, { Component } from "react";
import { connect } from "react-redux";
import { newPortfolio } from "../actions";
import { updateUsername } from "../actions";
import UsernameInput from "./UsernameInput";

class Portfolio extends Component {
  componentDidMount() {
    this.props.newPortfolio();
  }

  render() {
    let { cash, shares } = this.props.portfolio;
    let { currentPrice } = this.props;

    if (cash === undefined) {
      cash = 0;
    } else {
      cash = cash.toFixed(2);
    }

    if (currentPrice === undefined) {
      currentPrice = 0;
    } else {
      currentPrice = currentPrice.toFixed(2);
    }

    if (shares === undefined) {
      shares = 0;
    }

    return (
      <div>
        <h2>Current Price: {`$${currentPrice}`}</h2>
        <h2>Portfolio</h2>
        <UsernameInput />
        <ul>
          <li>Cash: {cash}</li>
          <li>Shares: {shares}</li>
          <li>Share Value: {parseFloat(shares * currentPrice).toFixed(2)}</li>
          <li>
            Total Value:{" "}
            {(parseFloat(shares * currentPrice) + parseFloat(cash)).toFixed(2)}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    currentPrice: state.currentPrice.y
  };
};

export default connect(
  mapStateToProps,
  {
    newPortfolio: newPortfolio,
    updateUsername: updateUsername
  }
)(Portfolio);
