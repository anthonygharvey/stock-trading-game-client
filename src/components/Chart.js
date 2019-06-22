import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react";
import { connect } from "react-redux";
import {
  updatePrices,
  startingBell,
  updateDay,
  getCurrentPrice
} from "../actions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  updateChart() {
    this.props.updatePrices(this.props.stock.prices);
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
          dataPoints: this.props.prices
        }
      ]
    };
    return (
      <div>
        <button
          className="ui button primary"
          onClick={() => {
            this.props.updateDay(this.props.day);
            this.props.updatePrices(this.props.stock.prices, this.props.day);
          }}
        >
          Update Chart
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
    getCurrentPrice: getCurrentPrice
  }
)(Chart);
