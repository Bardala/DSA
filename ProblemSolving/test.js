var maxProfit = function (prices) {
  let max = 0;
  for (let l = 0, r = l + 1; r < prices.length; ) {
    if (prices[l] < prices[r]) {
      max = Math.max(prices[r++] - prices[l], max);
    } else if (prices[l] > prices[r]) {
      l = r;
      r++;
    }
  }
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
