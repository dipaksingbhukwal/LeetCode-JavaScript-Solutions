/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var hash = new Map();
  var anagram = [];
  strs.forEach(str => {
    var sorted = str
      .split("")
      .sort()
      .join();

    if (!hash.has(sorted)) {
      hash.set(sorted, []);
    }
    hash.get(sorted).push(str);
  });

  hash.forEach(value => anagram.push(value));

  return anagram;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(
  groupAnagrams(["eat", "tba", "tan", "ate", "nat", "bat", "tab", "ant"])
);
