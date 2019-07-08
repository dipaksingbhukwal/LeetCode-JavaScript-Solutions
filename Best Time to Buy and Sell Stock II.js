/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    // to check if current element is smaller than next element
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i]; // if smaller, calculate difference and add to profit
    }
  }
  return profit; // return calculated profit
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2, 10, 2]));
