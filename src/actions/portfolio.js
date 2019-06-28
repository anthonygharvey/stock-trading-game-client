export const newPortfolio = () => {
  return {
    type: "NEW_PORTFOLIO",
    payload: {
      user_name: "",
      initial_balance: 1000,
      cash: 1000,
      stock: "",
      shares: 0,
      share_value: 0,
      total_value: 1000,
      trade_attributes: []
    }
  };
};
