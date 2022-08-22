// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function arrayOfNumbers() {
  var numbers2 = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      numbers2.push(numbers[i]);
    }
  }
  return numbers2;
}

var numbers = [-1, 2, 3, -4, 9];

numbers2 = arrayOfNumbers(numbers);

console.log(numbers2);
