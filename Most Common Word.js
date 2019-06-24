/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  var word = "";
  if (word) {
    console.log(word);
  }

  var para = paragraph
    .toLowerCase()
    .replace(/[\W+/]/g, " ")
    .split(" ");
  var table = {};
  for (word of para) {
    if (!banned.includes(word) && word) {
      if (!table[word]) {
        table[word] = 1;
      } else {
        table[word]++;
      }
    }
  }

  return Object.keys(table).reduce((a, b) => (table[a] > table[b] ? a : b));
};

console.log(
  mostCommonWord("Bob hit a ball1, the hit BALL() flew far after it was hit.", [
    "hit"
  ])
);
console.log(mostCommonWord("a.", []));
