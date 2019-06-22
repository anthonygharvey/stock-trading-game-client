import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react";
import { connect } from "react-redux";
import {
  updatePrices,
  startingBell,
  newDay,
  getCurrentPrice
} from "../actions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  updateChart() {
    let chart = this.chart;
    let length = this.props.stock.prices.length - 1;
    let price = [this.props.stock.prices[length]].map(price => {
      let year = price.date.substring(0, 4);
      let month = price.date.substring(5, 7);
      let day = price.date.substring(8, 10);
      return { x: new Date(`${year}, ${month}, ${day}`), y: price.price };
    });
    this.props.getCurrentPrice(this.props.stock.prices); // gets the last element in the prices array
    this.props.newDay(this.props.stock.prices);
    this.props.updatePrices(price[0]);
  }

  componentDidMount() {
    this.props.startingBell();
    this.updateChart();
    this.updateChart();
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
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    prices: state.prices,
    currentPrice: state.currentPrice
  };
};

export default connect(
  mapStateToProps,
  {
    startingBell: startingBell,
    updatePrices: updatePrices,
    newDay: newDay,
    getCurrentPrice: getCurrentPrice
  }
)(Chart);
