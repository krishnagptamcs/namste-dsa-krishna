//From the given price array ,find out the max return , on sell and buy

function findMaxReturn(prices) {
  let min = prices[0];
  let max_profit = 0;

  for (let i = 1; i < prices.legth; i++) {
    if (prices[i] - min > max_profit) {
      max_profit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
}
