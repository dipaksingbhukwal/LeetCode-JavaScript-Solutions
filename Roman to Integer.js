/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var num = 0;
  var i = 0;

  if (s.length == 0 || s == null) {
    return 0;
  }
  console.log(s.length);

  while (i < s.length) {
    if (i <= s.length - 2 && (s.charAt(i) == "I" && s.charAt(i + 1) == "V")) {
      num += 4;
      i += 2;
    } else if (
      i <= s.length - 2 &&
      (s.charAt(i) == "I" && s.charAt(i + 1) == "X")
    ) {
      num += 9;
      i += 2;
    } else if (
      i <= s.length - 2 &&
      (s.charAt(i) == "X" && s.charAt(i + 1) == "L")
    ) {
      num += 40;
      i += 2;
    } else if (
      i <= s.length - 2 &&
      (s.charAt(i) == "X" && s.charAt(i + 1) == "C")
    ) {
      num += 90;
      i += 2;
    } else if (
      i <= s.length - 2 &&
      (s.charAt(i) == "C" && s.charAt(i + 1) == "D")
    ) {
      num += 400;
      i += 2;
    } else if (
      i <= s.length - 2 &&
      (s.charAt(i) == "C" && s.charAt(i + 1) == "M")
    ) {
      num += 900;
      i += 2;
    } else {
      num += toInt(s.charAt(i));
      i++;
    }
  }
  console.log(num);
  return num;
};

var toInt = function(romanChar) {
  var num = 0;
  switch (romanChar) {
    case "I":
      num = 1;
      break;
    case "V":
      num = 5;
      break;
    case "X":
      num = 10;
      break;
    case "L":
      num = 50;
      break;
    case "C":
      num = 100;
      break;
    case "D":
      num = 500;
      break;
    case "M":
      num = 1000;
      break;
  }
  return num;
};

console.log(romanToInt("III")); // Expected output - 3
console.log(romanToInt("IV")); // Expected output - 4
console.log(romanToInt("IX")); // Expected output - 9
console.log(romanToInt("LVIII")); // Expected output - 58
