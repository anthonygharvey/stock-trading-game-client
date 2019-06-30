export const newPortfolio = () => {
  return {
    type: "NEW_PORTFOLIO",
    payload: {
      user_name: "",
      initial_balance: 1000,
      cash: 1000,
      commission: 0,
      stock: "",
      shares: 0,
      share_value: 0,
      total_value: 1000,
      trade_attributes: []
    }
  };
};

export const updateUsername = (user_name, portfolio) => {
  return {
    type: "UPDATE_USERNAME",
    payload: {
      user_name: user_name,
      portfolio: portfolio
    }
  };
};
