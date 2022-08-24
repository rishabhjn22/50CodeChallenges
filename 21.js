// Rotate an array to the right 1 position
var arr = [2, 4, 5, 1];
rotateRight(arr);
console.log(arr);

function rotateRight(arr) {
  var temp = arr.pop();
  arr.unshift(temp);
}
