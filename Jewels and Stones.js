/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var count = 0;

  //   Solution  using hashMap with runtime - 60 ms
  //   var hash = new Map();
  //   J.split("").map(j => hash.set(j));
  //   S.split("").map(s => {
  //     if (hash.has(s)) count++;
  //   });
  //   return count;

  //   Solution  using array with runtime - 48 ms
  var arr = [];
  J.split("").map(j => arr.push(j));
  S.split("").map(s => {
    if (arr.includes(s)) count++;
  });
  return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("aA", "aAAbbabb"));
console.log(numJewelsInStones("", ""));
console.log(numJewelsInStones("z", "ZZZ"));
