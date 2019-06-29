export const buyReducer = (initialState = {}, action) => {
  if (action.type === "BUY") {
    const { currentPrice } = action.payload;
    const { portfolio } = action.payload;
    let { cash } = portfolio;
    const validTrade = cash >= currentPrice;
    const day = action.payload.chartPrices.length - 1;
    if (validTrade) {
      action.payload.chartPrices[day].markerColor = "green";
      action.payload.chartPrices[day].markerSize = 10;
      action.payload.chartPrices[day].markerType = "circle";
      portfolio.cash -= currentPrice;
      portfolio.shares += 1;
    }
  }
  return initialState;
};

export const sellReducer = (initialState = {}, action) => {
  if (action.type === "SELL") {
    const { currentPrice } = action.payload;
    const { portfolio } = action.payload;
    let { shares } = portfolio;
    const validTrade = shares > 0;
    const day = action.payload.chartPrices.length - 1;
    if (validTrade) {
      action.payload.chartPrices[day].markerColor = "red";
      action.payload.chartPrices[day].markerSize = 10;
      action.payload.chartPrices[day].markerType = "circle";
      portfolio.shares -= 1;
      portfolio.cash += currentPrice;
    }
  }
  return initialState;
};

export const updateValuesReducer = (initialState = {}, action) => {
  if (action.type === "UPDATE_VALUES") {
    let { share_value, shares, cash } = action.payload.portfolio;
    let { currentPrice } = action.payload;
    action.payload.portfolio.share_value =
      shares * (currentPrice.length === 0 ? 0 : currentPrice.y);
    action.payload.portfolio.total_value = share_value + cash;
  }
  return initialState;
};
