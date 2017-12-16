var investments = require('./src/pairs');
var Portfolio = require('./src/portfolio');

// This should print:
// 1. The name of each investment
// 2. The change in value from start time to end time
// 3. The percent change in value from start time to end time

// For example if the prices from start to end were:
//eth_usd 112 9000
//btc_usd 1120 7000
// and I had 2 shares of eth and three shares of btc my holdings would go from
//eth_usd 224 18000
//btc_usd 3360 21000
// And this function would output the change in portfolio values
//eth_usd 17776 7936%
//btc_usd 17640 525%
const portfolio = new Portfolio();
portfolio.add('eth_usd', 2, 0);
portfolio.add('btc_usd', 3, 0);
portfolio.printEarnings(investments.pairs);