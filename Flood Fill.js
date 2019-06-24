/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;

  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

var fill = function(image, r, c, color, newColor) {
  if (
    r < 0 ||
    r >= image.length ||
    c < 0 ||
    c >= image[r].length ||
    image[r][c] !== color
  )
    return;

  image[r][c] = newColor;

  fill(image, r + 1, c, color, newColor);
  fill(image, r - 1, c, color, newColor);
  fill(image, r, c + 1, color, newColor);
  fill(image, r, c - 1, color, newColor);
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
