export const newPortfolio = () => {
  return {
    type: "NEW_PORTFOLIO",
    payload: {
      user_name: "",
      initial_balance: 10000,
      cash: 10000,
      stock: "",
      shares: 0,
      share_value: 0,
      total_value: 10000,
      trade_attributes: []
    }
  };
};
