/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  // One line solution
  //   return A.map(a => a.reverse()).map(x =>x.map(value => (true && value ? 0 : 1)));
  //   return A.map(a => a.reverse().map(x => (x === 0 ? 1 : 0)));

  // console.log(A);
  A.forEach(a => {
    let j = 0,
      k = a.length - 1;
    // Flipt the image pixels
    while (j < k) {
      [a[j], a[k]] = [a[k], a[j]];
      j++, k--;
    }
    // Invert the image pixels
    for (j = 0; j < a.length; j++) {
      a[j] = a[j] === 0 ? 1 : 0;
    }
  });
  // console.log(A);
  return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
// Expected output [[1,0,0],[0,1,0],[1,1,1]]

console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
);
// Expected output [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
