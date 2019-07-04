import { combineReducers } from "redux";
import { newPortfolioReducer } from "./portfolio";
import { updateUsernameReducer } from "./portfolio";
import { buyReducer } from "./buyAndSell";
import { sellReducer } from "./buyAndSell";

const stockReducer = (stock = {}, action) => {
  if (action.type === "FETCH_STOCK") {
    return action.payload;
  }
  return stock;
};

const updatePricesReducer = (prices = [], action) => {
  if (action.type === "UPDATE_PRICES") {
    let price = action.payload.prices
      .slice(-action.payload.day - 1)
      .map(price => {
        let year = price.date.substring(0, 4);
        let month = price.date.substring(5, 7);
        let day = price.date.substring(8, 10);
        return { x: new Date(`${year}, ${month}, ${day}`), y: price.price };
      });

    action.payload.prices.slice(0, -1);
    return [...prices, price[0]];
  }
  return prices;
};

const updateDayReducer = (day = 0, action) => {
  if (action.type === "UPDATE_DAY") {
    return (day += 1);
  }
  return day;
};

const currentPriceReducer = (prices = [], action) => {
  if (action.type === "GET_CURRENT_PRICE") {
    let price = action.payload.prices
      .slice(-action.payload.day - 1)
      .map(price => {
        let year = price.date.substring(0, 4);
        let month = price.date.substring(5, 7);
        let day = price.date.substring(8, 10);
        return { x: new Date(`${year}, ${month}, ${day}`), y: price.price };
      });

    return price[0];
  }
  return prices;
};

const leaderboardReducer = (leaderboard = {}, action) => {
  if (action.type === "GET_LEADERBOARD") {
    return action.payload;
  }
  return leaderboard;
};

export default combineReducers({
  stock: stockReducer,
  portfolio: newPortfolioReducer,
  day: updateDayReducer,
  prices: updatePricesReducer,
  currentPrice: currentPriceReducer,
  buy: buyReducer,
  sell: sellReducer,
  updateUsername: updateUsernameReducer,
  leaderboard: leaderboardReducer
});
