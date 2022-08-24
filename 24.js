// Create a function that will merge two arrays and return the result as a new array

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

function mergeArr() {
  var arr3 = [];
  arr3 = arr1.concat(arr2);
  console.log(arr3);
}
mergeArr();
