/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = Number.MIN_VALUE;
  var min = Number.MAX_VALUE;

  //   Using two loops i.e. (o) = n^2 time complexity
  //   Runtime = 708 ms

  //   for (var i = 0; i < height.length - 1; i++) {
  //     for (var j = i; j < height.length; j++) {
  //       min = Math.min(height[i], height[j]);
  //       max = Math.max(max, min * (j - i));
  //     }
  //   }

  //   Using single loops i.e. (o) = n time complexity
  //   Runtime = 52 ms
  var i = 0,
    j = height.length - 1;
  while (i < j) {
    min = Math.min(height[i], height[j]);
    max = Math.max(max, min * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([9, 8, 6, 2, 5, 4, 8, 9, 2]));
