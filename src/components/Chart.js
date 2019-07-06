import React, { Component } from "react";
import CanvasJSReact from "../lib/canvasjs.react";
import Username from "./UsernameContainer";
import { UserName } from "../lib/randomUser";
import { connect } from "react-redux";
import {
  updatePrices,
  startingBell,
  updateDay,
  getCurrentPrice,
  fetchStock,
  buy,
  sell
} from "../actions";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  startGame() {
    let startButton = document.getElementById("start");
    startButton.removeAttribute("click");
    startButton.innerText = "New Game";
    startButton.addEventListener("click", () => document.location.reload(true));

    this.props.portfolio.stock = this.props.stock.symbol;
    let timerId = setInterval(() => {
      const { day } = this.props;
      const { prices } = this.props.stock;
      this.props.getCurrentPrice(prices, day);
      this.props.updateDay(this.props.day);
      this.props.updatePrices(prices, day);
    }, 201);

    setTimeout(() => {
      clearInterval(timerId);
      this.endGame();
    }, 201 * 100);
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

  saveGame() {
    let user = this.props.portfolio.user_name;
    if (user === "") {
      this.props.portfolio.user_name = UserName();
    }

    let { portfolio } = this.props;
    const game = {
      player: {
        user_name: portfolio.user_name,
        portfolio_attributes: {
          initial_balance: portfolio.initial_balance,
          cash: portfolio.cash,
          stock: portfolio.stock,
          shares: portfolio.shares,
          share_value: portfolio.shares * this.props.currentPrice,
          total_value:
            portfolio.shares * this.props.currentPrice.y + portfolio.cash,
          trades_attributes: portfolio.trade_attributes
        }
      }
    };
    this.postGame(game);
  }

  postGame(game) {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(`${API_URL}/save_game`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      creditials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    });
  }

  endGame() {
    this.updateTitle();
    this.saveGame();
  }

  componentDidMount() {
    this.props.fetchStock();
    this.props.prices.length = 0;
    this.props.currentPrice.y = 0;
    document.addEventListener("keydown", e => {
      const { prices, portfolio, currentPrice, day } = this.props;
      let cursor = e.keyCode;
      if (cursor === 66 && day > 0) {
        this.props.buy(currentPrice.y, portfolio, prices);
      }

      if (cursor === 83 && day > 0) {
        this.props.sell(currentPrice.y, portfolio, prices);
      }

      if (cursor === 32 && day === 0) {
        this.startGame();
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
      <div className="ui grid">
        <Username />
        <div>
          <button
            id="start"
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
              if (this.props.day === 0) {
                return;
              }
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
        </div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
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
    sell: sell
  }
)(Chart);
