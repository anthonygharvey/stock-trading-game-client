import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react";
import { connect } from "react-redux";
import { selectStock } from "../actions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    let prices = this.props.stock.prices.map(item => {
      let year = item.date.substring(0, 4);
      let month = item.date.substring(5, 7);
      let day = item.date.substring(8, 10);
      return { x: new Date(`${year}, ${month}, ${day}`), y: item.price };
    });

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
          dataPoints: prices
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default connect(
  mapStateToProps,
  { selectedStock: selectStock }
)(Chart);
