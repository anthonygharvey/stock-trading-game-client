// Action creator
export const selectStock = stock => {
  // return an action
  return {
    type: "SELECTED_STOCK",
    payload: stock
  };
};
