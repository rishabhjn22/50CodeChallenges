// Print the first 100 prime numbers

function primeNumber(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var mathsRound = Math.sqrt(n);
  for (var i = 2; i <= mathsRound; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

printPrimes(100);

function printPrimes(primes) {
  var n = 0;
  var i = 2;

  while (n < primes) {
    if (primeNumber(i)) {
      console.log(n, "-->", i);
      n++;
    }
    i++;
  }
}
