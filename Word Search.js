/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0) && dfs(i, j, 0, board, word))
        return true;
    }
  }
  return false;
};

var dfs = function(i, j, count, board, word) {
  if (count === word.length) return true;

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    word.charAt(count) !== board[i][j]
  )
    return false;

  var temp = board[i][j];
  board[i][j] = " ";
  var found =
    dfs(i + 1, j, count + 1, board, word) ||
    dfs(i - 1, j, count + 1, board, word) ||
    dfs(i, j + 1, count + 1, board, word) ||
    dfs(i, j - 1, count + 1, board, word);
  board[i][j] = temp;
  //   console.log(found);

  return found;
};

console.log(
  exist(
    [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    "SCEA"
  )
);
