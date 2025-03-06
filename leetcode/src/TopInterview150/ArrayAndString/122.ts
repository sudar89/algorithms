export function maxProfit2(prices: number[]): number {
  let sum = 0;
  for (let index = 1; index < prices.length; index++) {
    if (prices[index] > prices[index - 1]) {
      sum += prices[index] - prices[index - 1];
    }
  }

  return sum;
}
