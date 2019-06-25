/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var ways = [];

  for (let i = 0; i < m; i++) {
    ways[i] = [];
    for (let j = 0; j < n; j++) {
      ways[i][j] = [];
    }
  }

  for (let i = 0; i < m; i++) {
    ways[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    ways[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      ways[i][j] = ways[i - 1][j] + ways[i][j - 1];
    }
  }

  return ways[m - 1][n - 1];
};
console.log(uniquePaths(2, 3));
