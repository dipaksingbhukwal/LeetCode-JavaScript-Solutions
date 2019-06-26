/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = "";

  //return blank for empty array
  if (strs == null || strs.length == 0) return "";

  prefix = strs[0];
  //loop to iterate through characters in string
  for (var i = 0; i < strs[0].length; i++) {
    //loop to iterate through strings in string[]
    for (var j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != strs[0].charAt(i))
        return prefix.substring(0, i);
    }
    console.log(prefix);
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
