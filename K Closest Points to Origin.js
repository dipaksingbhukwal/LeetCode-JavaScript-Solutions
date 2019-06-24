/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  var origin = [0, 0];
  return points
    .sort((a, b) => Euclid(origin, a) - Euclid(origin, b))
    .slice(0, K);
};

var Euclid = function(x, y) {
  return (x[0] - y[0]) * (x[0] - y[0]) + (x[1] - y[1]) * (x[1] - y[1]);
};
