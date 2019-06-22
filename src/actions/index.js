export const startingBell = prices => {
  return {
    type: "STARTING_BELL",
    payload: prices
  };
};

export const updatePrices = (prices, day) => {
  return {
    type: "UPDATE_PRICES",
    payload: {
      prices: prices,
      day: day
    }
  };
};

export const updateDay = day => {
  return {
    type: "UPDATE_DAY",
    payload: {
      day: day
    }
  };
};

export const getCurrentPrice = stockPrices => {
  return {
    type: "GET_CURRENT_PRICE",
    payload: stockPrices
  };
};
