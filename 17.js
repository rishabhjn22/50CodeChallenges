// Calculate the sum of digits of a positive integer number

function add(n) {
  total = 0;
  for (var i = 0; i <= n.length; i++) {
    if (n[i] > 0) {
      total += n[i];
    }
  }
  return total;
}

var n = [-10, 2, 3, 8, 19, -23, 1, -1];
var total = add(n);
console.log(total);
