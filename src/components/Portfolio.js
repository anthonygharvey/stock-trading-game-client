import React from "react";

export default function Portfolio(props) {
  const { currentPrice, cash, shares, initial_balance } = props;

  let totalCash = cash.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  let shareValue = parseFloat(shares * currentPrice).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  let totalValue = 0;
  if (currentPrice === 0) {
    totalValue = (0).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  } else {
    totalValue = (
      parseFloat(shares * currentPrice) + parseFloat(cash)
    ).toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  let percentageGain = 0;
  if (currentPrice === 0) {
    percentageGain = "0.00%";
  } else {
    percentageGain =
      (
        ((parseFloat(shares * currentPrice) + parseFloat(cash)) /
          initial_balance -
          1) *
        100
      ).toFixed(2) + "%";
  }

  return (
    <>
      <h2>Current Price: {`$${currentPrice}`}</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Cash</th>
            <th>Shares</th>
            <th>Share Value</th>
            <th>Total Value</th>
            <th>% Gain</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalCash}</td>
            <td>{shares}</td>
            <td>{shareValue}</td>
            <td>{totalValue}</td>
            <td>{percentageGain}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
