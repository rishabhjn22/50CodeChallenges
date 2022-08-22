// Find the maximum number in an array of numbers

function maximumNumber(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

var arr = [90, 10, 2, 19, 66, 2, 4];
var max = maximumNumber(arr);
console.log(max);
