
// keys are pair names and the arrays represent the value of a pair at a point in time
const pairs = {
  'eth_usd': [112, 120, 9000],
  'btc_usd': [1120, 1200, 7000],
  'vti_usd': [{ price: 120, div: 20 }, { price: 200, div: 40 }, { price: 750, div: 75 }]
}

/***
 * Finds the best performing pair for a given time period
 *
 * @pairs The pairs datastructure
 * @start Starting index
 * @end   End index
 *
 * @returns An object with information about the best performing pair
 */
const findBestPair = (pairs, [start, end]) => {
  const maxSlopeReducer = (acc, cmp) => acc = (cmp.slope > acc.slope) ? cmp : acc

  return Object.entries(pairs).map(([pair, data]) => {
    const slope = (data[end] - data[start]) / (end - start);
    return {pair, slope};
  }).reduce((acc, cmp) => (cmp.slope > acc.slope) ? cmp : acc, {pair: '', slope: 0});
}

const bestPair = findBestPair(pairs, [0, 2]);

console.log('The best pair is:', bestPair);
