import React, { Component } from "react";
import { connect } from "react-redux";
import { newPortfolio } from "../actions";

class Portfolio extends Component {
  componentDidMount() {
    this.props.newPortfolio();
  }

  render() {
    const { cash, shares, share_value, total_value } = this.props.portfolio;
    return (
      <div>
        <h2>Current Price: {this.props.currentPrice || "$0.00"}</h2>
        <h2>Portfolio</h2>
        <ul>
          <li>Cash: {cash}</li>
          <li>Shares: {shares}</li>
          <li>Share Value: {share_value}</li>
          <li>Total Value: {total_value}</li>
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
    newPortfolio: newPortfolio
  }
)(Portfolio);
