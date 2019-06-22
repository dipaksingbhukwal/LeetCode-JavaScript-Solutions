// Try edit msg
var token = [["(", ")"], ["{", "}"], ["[", "]"]];

function isBalanced() {
  //   var str = "{{([[]]())}}";
  var str = "{{}";
  var arrStr = str.split("");
  var stack = [];

  for (var i = 0; i < arrStr.length; i++) {
    if (isParanthesis(arrStr[i])) {
      if (isOpeningParanthesis(arrStr[i])) {
        stack.push(arrStr[i]);
      } else {
        if (stack.length === 0) {
          return false;
        }
        var top = stack.pop();
        if (!isMatch(top, arrStr[i])) {
          return false;
        }
      }
    }
  }
  return stack.length === 0 ? true : false;
}

function isParanthesis(str) {
  var str = "(){}[]";
  return str.indexOf(str) > -1;
}

function isOpeningParanthesis(str) {
  for (var j = 0; j < token.length; j++) {
    if (token[j][0] == str) return true;
  }
  return false;
}

function isMatch(top, str) {
  for (var k = 0; k < token.length; k++) {
    if (token[k][0] === top && token[k][1] === str) return true;
  }
  return false;
}

isBalanced()
  ? console.log("Balanced Paranthesis")
  : console.log("Not Balanced Paranthesis");
