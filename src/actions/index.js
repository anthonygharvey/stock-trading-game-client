export const startingBell = prices => {
  return {
    type: "STARTING_BELL",
    payload: prices
  };
};

export const updatePrices = price => {
  return {
    type: "UPDATE_PRICES",
    payload: {
      price: price
    }
  };
};

export const newDay = stockPrices => {
  return {
    type: "NEW_DAY",
    payload: stockPrices
  };
};

export const getCurrentPrice = stockPrices => {
  return {
    type: "GET_CURRENT_PRICE",
    payload: stockPrices
  };
};
