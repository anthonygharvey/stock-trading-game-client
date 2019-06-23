import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react";
import { connect } from "react-redux";
import {
  updatePrices,
  startingBell,
  updateDay,
  getCurrentPrice,
  fetchStock
} from "../actions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  startGame() {
    let timerId = setInterval(() => {
      this.props.updateDay(this.props.day);
      this.props.updatePrices(this.props.stock.prices, this.props.day);
      this.props.getCurrentPrice(this.props.stock.prices, this.props.day);
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
    currentPrice: state.currentPrice
  };
};

export default connect(
  mapStateToProps,
  {
    startingBell: startingBell,
    updatePrices: updatePrices,
    updateDay: updateDay,
    getCurrentPrice: getCurrentPrice,
    fetchStock: fetchStock
  }
)(Chart);
