/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var len = prices.length;
  var maxProfit = 0;
  //   for (var i = 0; i < len; i++) {
  //     for (var j = 0; j < len; j++) {
  //       if (prices[j] - prices[i] > maxProfit && j > i)
  //         maxProfit = prices[j] - prices[i];
  //     }
  //   }

  var min = prices[0];
  for (var i = 0; i < len; i++) {
    if (prices[i] < min) min = prices[i];
    else maxProfit = Math.max(maxProfit, prices[i] - min);
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([]));
