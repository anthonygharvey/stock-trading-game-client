import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react";
import { connect } from "react-redux";
import {
  updatePrices,
  startingBell,
  updateDay,
  getCurrentPrice,
  fetchStock,
  buy,
  updateValues
} from "../actions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  startGame() {
    let timerId = setInterval(() => {
      const { day } = this.props;
      const { prices } = this.props.stock;
      const { portfolio } = this.props;
      const { currentPrice } = this.props;
      this.props.updateDay(this.props.day);
      this.props.updatePrices(prices, day);
      this.props.getCurrentPrice(prices, day);
      this.props.updateValues(portfolio, currentPrice);
    }, 200);

    setTimeout(() => {
      clearInterval(timerId);
    }, 200 * 100);
  }

  componentDidMount() {
    this.props.fetchStock();
  }

  render() {
    let options = {
      animationEnabled: true,
      animationDuration: 15000,
      title: {
        text: "Stock: ___ - Dates: ___"
      },
      axisX: {
        valueFormatString: "MMM",
        labelFontColor: "transparent"
      },
      axisY: {
        prefix: "$",
        includeZero: false
      },
      data: [
        {
          yValueFormatString: "$#,###.#0",
          xValueFormatString: "MMMM",
          type: "spline",
          markerType: "none",
          dataPoints: this.props.prices
        }
      ]
    };
    return (
      <div>
        <button
          className="ui button primary"
          onClick={() => {
            this.startGame();
          }}
        >
          Start Game
        </button>
        <button
          className="ui button primary"
          onClick={() => {
            this.props.buy(this.props.currentPrice.y, this.props.portfolio);
            // this.props.buy(this.props);
          }}
        >
          BUY
        </button>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    day: state.day,
    prices: state.prices,
    currentPrice: state.currentPrice,
    portfolio: state.portfolio
  };
};

export default connect(
  mapStateToProps,
  {
    startingBell: startingBell,
    updatePrices: updatePrices,
    updateDay: updateDay,
    getCurrentPrice: getCurrentPrice,
    fetchStock: fetchStock,
    buy: buy,
    updateValues: updateValues
  }
)(Chart);
