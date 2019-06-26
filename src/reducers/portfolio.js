export const newPortfolioReducer = (portfolio = {}, action) => {
  if (action.type === "NEW_PORTFOLIO") {
    return action.payload;
  }
  return portfolio;
};
