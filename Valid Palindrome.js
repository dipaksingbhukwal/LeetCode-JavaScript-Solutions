/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var str = s.toLowerCase().replace(/[\W+/]/g, "");
  var reverse = str
    .split("")
    .reverse()
    .join("");
  //   console.log(str);
  //   console.log(reverse);
  return str === reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// Expected output - true
console.log(isPalindrome("race a car"));
// Expected output - false
