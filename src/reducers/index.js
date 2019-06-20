import { combineReducers } from "redux";

const stockReducer = () => {
  return {
    symbol: "VZ",
    prices: [
      {
        date: "2002-03-19",
        price: 18.935
      },
      {
        date: "2002-03-18",
        price: 18.9072
      },
      {
        date: "2002-03-15",
        price: 18.939
      },
      {
        date: "2002-03-14",
        price: 18.9985
      },
      {
        date: "2002-03-13",
        price: 19.0065
      },
      {
        date: "2002-03-12",
        price: 18.8437
      },
      {
        date: "2002-03-11",
        price: 18.669
      },
      {
        date: "2002-03-08",
        price: 18.5181
      },
      {
        date: "2002-03-07",
        price: 18.8913
      },
      {
        date: "2002-03-06",
        price: 19.0938
      },
      {
        date: "2002-03-05",
        price: 18.8199
      },
      {
        date: "2002-03-04",
        price: 19.0303
      },
      {
        date: "2002-03-01",
        price: 19.2923
      },
      {
        date: "2002-02-28",
        price: 18.5816
      },
      {
        date: "2002-02-27",
        price: 18.7166
      },
      {
        date: "2002-02-26",
        price: 18.665
      },
      {
        date: "2002-02-25",
        price: 18.538
      },
      {
        date: "2002-02-22",
        price: 17.9861
      },
      {
        date: "2002-02-21",
        price: 17.6486
      },
      {
        date: "2002-02-20",
        price: 18.5062
      },
      {
        date: "2002-02-19",
        price: 18.1489
      },
      {
        date: "2002-02-15",
        price: 18.1091
      },
      {
        date: "2002-02-14",
        price: 18.0814
      },
      {
        date: "2002-02-13",
        price: 17.9861
      },
      {
        date: "2002-02-12",
        price: 17.998
      },
      {
        date: "2002-02-11",
        price: 18.0774
      },
      {
        date: "2002-02-08",
        price: 17.9464
      },
      {
        date: "2002-02-07",
        price: 17.6684
      },
      {
        date: "2002-02-06",
        price: 17.2317
      },
      {
        date: "2002-02-05",
        price: 17.8709
      },
      {
        date: "2002-02-04",
        price: 18.1052
      },
      {
        date: "2002-02-01",
        price: 18.5022
      },
      {
        date: "2002-01-31",
        price: 18.403
      },
      {
        date: "2002-01-30",
        price: 18.2958
      },
      {
        date: "2002-01-29",
        price: 18.5896
      },
      {
        date: "2002-01-28",
        price: 19.1216
      },
      {
        date: "2002-01-25",
        price: 18.9906
      },
      {
        date: "2002-01-24",
        price: 19.0978
      },
      {
        date: "2002-01-23",
        price: 19.5147
      },
      {
        date: "2002-01-22",
        price: 19.1772
      },
      {
        date: "2002-01-18",
        price: 19.4154
      },
      {
        date: "2002-01-17",
        price: 19.7807
      },
      {
        date: "2002-01-16",
        price: 19.4551
      },
      {
        date: "2002-01-15",
        price: 19.8879
      },
      {
        date: "2002-01-14",
        price: 19.9753
      },
      {
        date: "2002-01-11",
        price: 19.7331
      },
      {
        date: "2002-01-10",
        price: 19.602
      },
      {
        date: "2002-01-09",
        price: 19.4075
      },
      {
        date: "2002-01-08",
        price: 19.7728
      },
      {
        date: "2002-01-07",
        price: 19.8181
      },
      {
        date: "2002-01-04",
        price: 19.9402
      },
      {
        date: "2002-01-03",
        price: 19.7393
      },
      {
        date: "2002-01-02",
        price: 19.1049
      },
      {
        date: "2001-12-31",
        price: 18.6991
      },
      {
        date: "2001-12-28",
        price: 19.0183
      },
      {
        date: "2001-12-27",
        price: 19.0734
      },
      {
        date: "2001-12-26",
        price: 18.5967
      },
      {
        date: "2001-12-24",
        price: 18.5967
      },
      {
        date: "2001-12-21",
        price: 18.577
      },
      {
        date: "2001-12-20",
        price: 19.0183
      },
      {
        date: "2001-12-19",
        price: 19.0892
      },
      {
        date: "2001-12-18",
        price: 18.9316
      },
      {
        date: "2001-12-17",
        price: 19.0537
      },
      {
        date: "2001-12-14",
        price: 18.5967
      },
      {
        date: "2001-12-13",
        price: 18.7267
      },
      {
        date: "2001-12-12",
        price: 18.6637
      },
      {
        date: "2001-12-11",
        price: 18.8567
      },
      {
        date: "2001-12-10",
        price: 19.034
      },
      {
        date: "2001-12-07",
        price: 18.8567
      },
      {
        date: "2001-12-06",
        price: 19.1325
      },
      {
        date: "2001-12-05",
        price: 18.971
      },
      {
        date: "2001-12-04",
        price: 18.904
      },
      {
        date: "2001-12-03",
        price: 18.7031
      },
      {
        date: "2001-11-30",
        price: 18.5179
      },
      {
        date: "2001-11-29",
        price: 18.6991
      },
      {
        date: "2001-11-28",
        price: 18.8528
      },
      {
        date: "2001-11-27",
        price: 18.9119
      },
      {
        date: "2001-11-26",
        price: 19.2468
      },
      {
        date: "2001-11-23",
        price: 19.3059
      },
      {
        date: "2001-11-21",
        price: 19.3019
      },
      {
        date: "2001-11-20",
        price: 19.3847
      },
      {
        date: "2001-11-19",
        price: 19.6605
      },
      {
        date: "2001-11-16",
        price: 19.8181
      },
      {
        date: "2001-11-15",
        price: 20.0348
      },
      {
        date: "2001-11-14",
        price: 19.4044
      },
      {
        date: "2001-11-13",
        price: 19.2625
      },
      {
        date: "2001-11-12",
        price: 19.5029
      },
      {
        date: "2001-11-09",
        price: 19.7708
      },
      {
        date: "2001-11-08",
        price: 19.6762
      },
      {
        date: "2001-11-07",
        price: 19.6408
      },
      {
        date: "2001-11-06",
        price: 19.8772
      },
      {
        date: "2001-11-05",
        price: 20.1727
      },
      {
        date: "2001-11-02",
        price: 20.2318
      },
      {
        date: "2001-11-01",
        price: 20.149
      },
      {
        date: "2001-10-31",
        price: 19.625
      },
      {
        date: "2001-10-30",
        price: 19.4241
      },
      {
        date: "2001-10-29",
        price: 19.7747
      },
      {
        date: "2001-10-26",
        price: 19.9402
      },
      {
        date: "2001-10-25",
        price: 19.7747
      },
      {
        date: "2001-10-24",
        price: 19.7393
      }
    ]
  };
};

const updatePricesReducer = (prices = [], action) => {
  if (action.type === "UPDATE_PRICES") {
    // let price = action.payload.stock.prices.pop();
    // debugger;
    // return [...prices, price];
    return [...prices, action.payload.price];
  }
  return prices;
};

const newDayReducer = (stockPrices = [], action) => {
  if (action.type === "NEW_DAY") {
    return action.payload.pop();
  }
  return stockPrices;
};

const currentPriceReducer = (stockPrices = [], action) => {
  if (action.type === "GET_CURRENT_PRICE") {
    const length = action.payload.length;
    return action.payload[length - 1];
  }
  return stockPrices;
};

// any file can get access to the combined set of reducers
export default combineReducers({
  stock: stockReducer,
  newDay: newDayReducer,
  currentPrice: currentPriceReducer,
  prices: updatePricesReducer
});
