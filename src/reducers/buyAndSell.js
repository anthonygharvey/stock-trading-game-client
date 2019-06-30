function updateChart(type, chartPrices, day) {
  if (type === "BUY") {
    chartPrices[day].markerColor = "green";
    chartPrices[day].markerSize = 10;
    chartPrices[day].markerType = "circle";
  } else {
    chartPrices[day].markerColor = "red";
    chartPrices[day].markerSize = 10;
    chartPrices[day].markerType = "circle";
  }
}
function processTrade(type, portfolio, currentPrice) {
  if (type === "BUY") {
    portfolio.cash -= currentPrice + portfolio.commission;
    portfolio.shares += 1;
  } else {
    portfolio.cash += currentPrice + portfolio.commission;
    portfolio.shares -= 1;
  }
}

function addTrade(type, payload, day) {
  let trade = {
    date: payload.chartPrices[day].x,
    order_type: type,
    stock_symbol: payload.portfolio.stock,
    shares: 1,
    stock_price: payload.currentPrice,
    commission: payload.portfolio.commission
  };
  payload.portfolio.trade_attributes.push(trade);
}

export const buyReducer = (initialState = {}, action) => {
  if (action.type === "BUY") {
    const { currentPrice, portfolio, chartPrices } = action.payload;
    let { cash } = portfolio;
    const validTrade = cash >= currentPrice;
    const day = action.payload.chartPrices.length - 1;
    if (validTrade) {
      updateChart(action.type, chartPrices, day);
      processTrade(action.type, portfolio, currentPrice);
      addTrade(action.type, action.payload, day);
      action.payload.portfolio.share_value =
        action.payload.portfolio.shares * currentPrice;
    }
  }
  return initialState;
};

export const sellReducer = (initialState = {}, action) => {
  if (action.type === "SELL") {
    const { currentPrice, portfolio, chartPrices } = action.payload;
    let { shares } = portfolio;
    const validTrade = shares > 0;
    const day = action.payload.chartPrices.length - 1;
    if (validTrade) {
      updateChart(action.type, chartPrices, day);
      processTrade(action.type, portfolio, currentPrice);
      addTrade(action.type, action.payload, day);
      action.payload.portfolio.share_value =
        action.payload.portfolio.shares * currentPrice;
    }
  }
  return initialState;
};
