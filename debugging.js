
const pairs = {
  'eth_usd': [112, 120, 9000],
  'btc_usd': [1120, 1200, 7000],
  'vti_usd': [{ price: 120, div: 20 }, { price: 200, div: 40 }, { price: 750, div: 75 }]
}

const findBestPair = (pairs, [start, end]) => {
  return Object.entries(pairs).map(([pair, data]) => {
    const slope = (data[end] - data[start]) / (end - start);
    return {pair, slope};
  }).reduce((acc, cmp) => acc = (cmp.slope > acc.slope) ? cmp : acc, {pair: '', slope: 0});
}

const bestPair = findBestPair(pairs, [0, 2]);

console.log('The best pair is:', bestPair);