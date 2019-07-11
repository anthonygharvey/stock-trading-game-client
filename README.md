## Description

A game built with React and Redux where players are shown a scrolling chart of an anonymous stock and can buy/sell shares. The chart is updated incrementally with 100 days of prices during the game. At the end of the game the player is name of the stock and time period are revealed.

## Demo

App link: <a href="https://anonymous-stock-game.herokuapp.com/" target="_blank">Anonymous Stock Trading Game</a>

## Local Installation

Install the API: follow the <a href="https://github.com/anthonygharvey/stock-trading-game-api#local-installation" target="_blank">installation instructions</a> on the API repo

To install and run the React app on your local machine:

1. Click the green Clone or download button above and click the copy to clipboard button
2. From your terminal, run `git clone [paste the link from step 1]`
3. Then run cd `stock-trading-game-client` to navigate to the directory
4. Run `npm install` to install the necessary packages and dependencies
5. Create a `.env` file in the root of your local directory `stock-trading-game-client/.env` and add the following line: `REACT_APP_API_URL=http://localhost:4000/api`
6. Run `npm start` to start the app
