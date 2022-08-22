// Calculate 10!
var fact = 1;
function factorial() {
  for (var i = 1; i <= 10; i++) {
    fact *= i;
  }
  console.log(fact);
}
factorial();
