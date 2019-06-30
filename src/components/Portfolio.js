import React from "react";

export default function Portfolio(props) {
  const { currentPrice, cash, shares } = props;
  return (
    <div>
      <h2>Current Price: {`$${currentPrice}`}</h2>
      <h2>Portfolio</h2>
      <ul>
        <li>Cash: {cash}</li>
        <li>Shares: {shares}</li>
        <li>Share Value: {parseFloat(shares * currentPrice).toFixed(2)}</li>
        <li>
          Total Value:{" "}
          {(parseFloat(shares * currentPrice) + parseFloat(cash)).toFixed(2)}
        </li>
      </ul>
    </div>
  );
}
