/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  s = s
    .split("")
    .sort()
    .join("");
  t = t
    .split("")
    .sort()
    .join("");
  return s === t ? true : false;

  //     One line solutuin
  //     return s.split("").sort().join("")===t.split("").sort().join("");
};
