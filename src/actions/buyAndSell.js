export const buy = (currentPrice, portfolio) => {
  return {
    type: "BUY",
    payload: {
      portfolio: portfolio,
      currentPrice: currentPrice
    }
  };
};

export const updateValues = (portfolio, currentPrice) => {
  return {
    type: "UPDATE_VALUES",
    payload: {
      portfolio: portfolio,
      currentPrice: currentPrice
    }
  };
};
