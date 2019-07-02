/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack == null || needle == null) {
    return 0;
  }

  var NeedleLength = needle.length;
  var HaystackLength = haystack.length;

  for (var i = 0; i < HaystackLength - NeedleLength + 1; i++) {
    if (haystack[i] == needle[0]) {
      var j = 0;
      var k = i;
      var flag = false;
      while (j < NeedleLength && k < HaystackLength) {
        if (haystack.charAt(k) != needle.charAt(j)) {
          flag = true;
          break;
        } else {
          k++;
          j++;
        }
      }
      if (flag == false) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll")); // Expected output - 2
console.log(strStr("aaaaa", "bba")); // Expected output - -1
console.log(strStr("aa", "aaa")); // Expected output - -1
