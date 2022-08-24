// Print the first 10 Fibonacci numbers without recursion

function fibonacci() {
  var series = [0, 1];
  for (i = 0; i < 8; i++) {
    series.push(series[i] + series[i + 1]);
  }
  console.log(series);
}

fibonacci();
