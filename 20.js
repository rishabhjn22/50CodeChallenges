// Rotate an array to the left 1 position
var arr = [2, 4, 5, 1];
rotateLeft(arr);
console.log(arr);

function rotateLeft(arr) {
  var temp = arr.shift();
  arr.push(temp);
}
