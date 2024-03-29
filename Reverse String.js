/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // return s.reverse()
  var i = 0,
    j = s.length - 1;
  while (i < j) {
    var temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++, j--;
  }
  return s;
};
