export const newPortfolioReducer = (portfolio = {}, action) => {
  if (action.type === "NEW_PORTFOLIO") {
    return action.payload;
  }
  return portfolio;
};

export const updateUsernameReducer = (portfolio = {}, action) => {
  if (action.type === "UPDATE_USERNAME") {
    action.payload.portfolio.user_name = action.payload.user_name;
  }
  return portfolio;
};
