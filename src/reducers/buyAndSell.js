export const buyReducer = (initialState = {}, action) => {
  // export const buyReducer = (state = initialPortfolio, action) => {
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

export const updateValuesReducer = (initialState = {}, action) => {
  if (action.type === "UPDATE_VALUES") {
    let { share_value, total_value, shares, cash } = action.payload.portfolio;
    let { currentPrice } = action.payload;
    // debugger;
    action.payload.portfolio.share_value =
      shares * (currentPrice.length === 0 ? 0 : currentPrice.y);
    action.payload.portfolio.total_value = share_value + cash;
  }
  return initialState;
};
