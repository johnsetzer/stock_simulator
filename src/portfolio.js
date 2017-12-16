class Portfilio {
  constructor() {
    this.holdings = [];
  }

  add(investment, shares, boughtOn) {
    this.holdings.push({
      investment: investment,
      share: shares,
      boughtOn,
    });
  }

  printEarnings(pairs) {
    console.log('Please implement this function', this.holdings)
  }
}

module.exports = Portfilio