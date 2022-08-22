// Calculate the sum of numbers in an array of numbers

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
function addArray() {
  for (var i = 1; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}

addArray();
