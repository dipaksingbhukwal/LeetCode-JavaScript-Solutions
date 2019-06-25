/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var INF = 2147483647;
var wallsAndGates = function(rooms) {
  for (var i = 0; i < rooms.length; i++) {
    for (var j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) {
        dfs(i, j, 0, rooms);
      }
    }
  }
  console.log(rooms);
};

var dfs = function(i, j, count, rooms) {
  if (
    i < 0 ||
    i >= rooms.length ||
    j < 0 ||
    j >= rooms[i].length ||
    rooms[i][j] < count
  )
    return;

  rooms[i][j] = count;
  dfs(i + 1, j, count + 1, rooms);
  dfs(i - 1, j, count + 1, rooms);
  dfs(i, j + 1, count + 1, rooms);
  dfs(i, j - 1, count + 1, rooms);
};

console.log();
wallsAndGates([
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
]);
