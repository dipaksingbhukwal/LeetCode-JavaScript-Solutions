/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var yAxis = 0;
  var xAxis = 0;

  for (var i = 0; i < moves.length; i++) {
    var currentMove = moves.charAt(i);
    if (currentMove === "U") {
      yAxis++;
    } else if (currentMove === "D") {
      yAxis--;
    } else if (currentMove === "R") {
      xAxis++;
    } else if (currentMove === "L") {
      xAxis--;
    }
  }
  return xAxis === 0 && yAxis === 0;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("ULDRDRUL"));
