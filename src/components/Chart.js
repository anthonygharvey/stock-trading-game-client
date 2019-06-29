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
  sell,
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
      this.endGame();
    }, 200 * 100);
  }

  updateTitle() {
    var symbol = this.props.stock.symbol;
    var startDate = this.props.stock.prices[99].date;
    var endDate = this.props.stock.prices[0].date;

    var dates = [startDate, endDate].map(date => {
      var year = date.substring(0, 4);
      var month = date.substring(5, 7);
      var day = date.substring(8, 10);
      return `${month}/${day}/${year}`;
    });

    this.chart.options.title.text = `Stock: ${symbol} - Dates: ${dates.join(
      " - "
    )}`;
    this.chart.render();
  }

  endGame() {
    this.updateTitle();
  }

  componentDidMount() {
    this.props.fetchStock();
    document.addEventListener("keydown", e => {
      let cursor = e.keyCode;
      if (cursor === 66) {
        this.props.buy(
          this.props.currentPrice.y,
          this.props.portfolio,
          this.props.prices
        );
      }

      if (cursor === 83) {
        this.props.sell(
          this.props.currentPrice.y,
          this.props.portfolio,
          this.props.prices
        );
      }
    });
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
            this.props.buy(
              this.props.currentPrice.y,
              this.props.portfolio,
              this.props.prices
            );
          }}
        >
          BUY
        </button>
        <button
          className="ui button primary"
          onClick={() => {
            this.props.sell(
              this.props.currentPrice.y,
              this.props.portfolio,
              this.props.prices
            );
          }}
        >
          SELL
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
    sell: sell,
    updateValues: updateValues
  }
)(Chart);
