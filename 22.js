// Reverse an array

var arr = [2, 3, "Rj"];
var arr2 = reverseArr(arr);
console.log(arr2);

function reverseArr(arr) {
  var arr2 = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}
