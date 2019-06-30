import React, { Component } from "react";
import { connect } from "react-redux";
import Portfolio from "./Portfolio";
import Username from "./UsernameContainer";
import { newPortfolio } from "../actions";
import { updateUsername } from "../actions";

class PortfolioContainer extends Component {
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
      <>
        <Username />
        <br />
        <Portfolio cash={cash} shares={shares} currentPrice={currentPrice} />
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
    newPortfolio: newPortfolio,
    updateUsername: updateUsername
  }
)(PortfolioContainer);