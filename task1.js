var investments = require('./src/pairs');

const bestPair = investments.findBestPair(investments.pairs, [0, 2]);

console.log('The best pair is:', bestPair);
