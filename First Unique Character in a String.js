/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var hash = new Map();
  for (var i = 0; i < s.length; i++) {
    // console.log(s.charAt(i))
    var character = s.charAt(i);

    if (!hash.has(character)) {
      hash.set(character, i);
    } else {
      hash.set(character, -1);
    }
  }
  console.log(hash);
  min = Number.MAX_VALUE;
  hash.forEach(h => {
    if (h > -1 && h < min) min = h;
  });
  min = min === Number.MAX_VALUE ? -1 : min;
  return min;
};

console.log(firstUniqChar("loltcode"));
console.log(firstUniqChar("lalove"));
console.log(firstUniqChar("Code"));
console.log(firstUniqChar("lllll"));
console.log(firstUniqChar(""));
