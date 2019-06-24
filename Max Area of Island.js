/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var max = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j));
      }
    }
  }
  return max;
};

var dfs = function(grid, r, c) {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[r].length ||
    grid[r][c] !== 1
  )
    return 0;
  grid[r][c] = 0;
  var count = 1;
  count += dfs(grid, r + 1, c);
  count += dfs(grid, r - 1, c);
  count += dfs(grid, r, c + 1);
  count += dfs(grid, r, c - 1);
  return count;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ])
);

console.log(maxAreaOfIsland([[0, 0, 1, 1, 0, 0, 0, 0]]));
