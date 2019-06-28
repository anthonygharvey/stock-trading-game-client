export const buyReducer = (initialState = {}, action) => {
  if (action.type === "BUY") {
    const { currentPrice } = action.payload;
    const { portfolio } = action.payload;
    let { cash } = portfolio;
    const validTrade = cash >= currentPrice;
    if (validTrade) {
      portfolio.user_name = "ANTHONY";
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
    let { cash, shares } = portfolio;
    const validTrade = shares > 0;
    if (validTrade) {
      portfolio.user_name = "SOLD!";
      portfolio.shares -= 1;
      portfolio.cash += currentPrice;
    }
  }
  return initialState;
};

export const updateValuesReducer = (initialState = {}, action) => {
  if (action.type === "UPDATE_VALUES") {
    let { share_value, total_value, shares, cash } = action.payload.portfolio;
    let { currentPrice } = action.payload;
    action.payload.portfolio.share_value =
      shares * (currentPrice.length === 0 ? 0 : currentPrice.y);
    action.payload.portfolio.total_value = share_value + cash;
  }
  return initialState;
};
