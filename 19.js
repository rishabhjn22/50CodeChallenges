//Create a function that will return in an array the first “p” prime numbers greater than “n”

function primeNumber(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var mathsRound = Math.sqrt(n);
  console.log(mathsRound, "Round");
  for (var i = 2; i <= mathsRound; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

printPrimes(13);

function printPrimes(primes) {
  var n = 0;
  var i = primes + 1;
  var arryOfPrimeNumber = [];

  while (n < primes) {
    if (primeNumber(i)) {
      n++;
      arryOfPrimeNumber.push(i);
    }
    i++;
  }
  console.log(arryOfPrimeNumber);
}
