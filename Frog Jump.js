/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  // If next positions is more than twice current value, its not possible to reach end.
  for (var i = 3; i < stones.length; i++) {
    if (stones[i] > stones[i - 1] * 2) return false;
  }

  //   Create Map to keep the trace of all stones to avoid water
  var hash = new Map();
  stones.forEach(stone => hash.set(stone));

  var lastStone = stones[stones.length - 1];

  //   Keep the record of all possible positions and jums so far
  var positions = [];
  var jumps = [];
  positions.push(0);
  jumps.push(0);

  while (positions.length !== 0) {
    var position = positions.pop();
    var jump = jumps.pop();

    for (var i = jump - 1; i <= jump + 1; i++) {
      //   avoid jumping on same location when i<=0, e.i. before first stone 0;
      if (i <= 0) continue;
      var nextPosition = position + i;
      if (nextPosition === lastStone) return true;
      else if (hash.has(nextPosition)) {
        positions.push(nextPosition);
        jumps.push(i);
      }
    }
  }

  return false;
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]));
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]));
