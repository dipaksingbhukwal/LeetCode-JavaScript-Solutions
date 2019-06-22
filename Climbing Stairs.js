/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var ways = new Array(n);
  ways[0] = 1;
  ways[1] = 1;
  for (var i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];

  // if(n==0 || n==1) return 1;
  // ways = climbStairs(n-1)+climbStairs(n-2);
  // return ways;
};

console.log(climbStairs(45));
