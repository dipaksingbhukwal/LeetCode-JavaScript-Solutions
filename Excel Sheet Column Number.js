/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var result = 0;

  for (var i = 0; i < s.length; i++) {
    result = result * 26 + (s.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }
  return result;
};

console.log(titleToNumber("AB")); //Expected output - 28
console.log(titleToNumber("ZY")); //Expected output - 701
