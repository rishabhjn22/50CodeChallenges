// Create a function that will find the nth Fibonacci number using recursion

// It this program 1st we have to check weather the number is 0 or 1 if not then we can check the nth fabonnaci number

var f1 = 0;
var f2 = 1;

function findFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}
var n = findFibonacci(3);
console.log(n);
