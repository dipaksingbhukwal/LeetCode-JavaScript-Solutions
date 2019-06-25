/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var sorted = [];
  A.forEach(a => {
    a % 2 == 0 ? sorted.unshift(a) : sorted.push(a);
  });

  return sorted;
};
console.log(sortArrayByParity([3, 1, 2, 4]));
