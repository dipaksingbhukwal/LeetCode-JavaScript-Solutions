/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  var max = 0,
    start = 0,
    len = s.length;
  var hash = new Map();

  for (var i = 0; i < len; i++) {
    let c = s.charAt(i);
    if (hash.has(c) && hash.get(c) >= start) start = hash.get(c) + 1;

    hash.set(c, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected output 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected output 3
