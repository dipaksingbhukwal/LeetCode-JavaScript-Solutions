/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  var partitionLength = [];
  var lastIndex = [];

  for (var i = 0; i < S.length; i++) {
    lastIndex[S.charAt(i).charCodeAt(0) - "a".charCodeAt(0)] = i;
  }
  console.log(lastIndex);

  var i = 0;
  while (i < S.length) {
    var end = lastIndex[S.charAt(i).charCodeAt(0) - "a".charCodeAt(0)];
    var j = i;
    while (j != end) {
      end = Math.max(
        end,
        lastIndex[S.charAt(j++).charCodeAt(0) - "a".charCodeAt(0)]
      );
    }
    partitionLength.push(j - i + 1);
    i = j + 1;
  }

  return partitionLength;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
