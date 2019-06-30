/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var n = matrix.length;

  for (var layer = 0; layer < n; layer++) {
    var first = layer;
    var last = n - layer - 1;

    for (var i = first; i < last; i++) {
      var offset = i - first;

      // Save top
      var top = matrix[first][i];

      // Top -> Right
      matrix[first][i] = matrix[last - offset][first];

      // Right -> Bottom
      matrix[last - offset][first] = matrix[last][last - offset];

      // Bottom -> Left
      matrix[last][last - offset] = matrix[i][last];

      // Left -> Top
      matrix[i][last] = top;
    }
  }
  //   console.log(matrix);
  return;
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// Expected output [[7,4,1],[8,5,2],[9,6,3]]
