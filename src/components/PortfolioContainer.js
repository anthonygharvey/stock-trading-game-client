import React, { Component } from "react";
import { connect } from "react-redux";
import Portfolio from "./Portfolio";
import { newPortfolio } from "../actions";

class PortfolioContainer extends Component {
  componentDidMount() {
    this.props.newPortfolio();
  }

  render() {
    let { cash, shares, initial_balance } = this.props.portfolio;
    let { currentPrice } = this.props;

    if (cash === undefined) {
      cash = 0;
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
      <>
        <Portfolio
          cash={cash}
          shares={shares}
          currentPrice={currentPrice}
          initial_balance={initial_balance}
        />
        <br />
      </>
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
)(PortfolioContainer);
