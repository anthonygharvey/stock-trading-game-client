export const buy = (currentPrice, portfolio, chartPrices) => {
  return {
    type: "BUY",
    payload: {
      portfolio: portfolio,
      currentPrice: currentPrice,
      chartPrices: chartPrices
    }
  };
};

export const sell = (currentPrice, portfolio, chartPrices) => {
  return {
    type: "SELL",
    payload: {
      portfolio: portfolio,
      currentPrice: currentPrice,
      chartPrices: chartPrices
    }
  };
};

// export const updateValues = (portfolio, currentPrice) => {
//   return {
//     type: "UPDATE_VALUES",
//     payload: {
//       portfolio: portfolio,
//       currentPrice: currentPrice
//     }
//   };
// };
