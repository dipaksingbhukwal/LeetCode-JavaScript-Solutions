/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var combinations = [];
  candidates.sort((a, b) => a - b);
  possibleCombinations(0, target, [], candidates, combinations);
  return combinations;
};

var possibleCombinations = function(
  index,
  target,
  current,
  candidates,
  combinations
) {
  if (target === 0) {
    combinations.push([...current]);
    return;
  }
  if (target < 0) return;

  for (var i = index; i < candidates.length; i++) {
    if (i === index || candidates[i] !== candidates[i - 1]) {
      current.push(candidates[i]);
      possibleCombinations(
        i + 1,
        target - candidates[i],
        current,
        candidates,
        combinations
      );
      current.pop();
    }
  }
};

console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));
