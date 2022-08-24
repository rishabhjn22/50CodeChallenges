// Reverse a string

var str = "Rishabh Jain";
var str2 = reverseString();
console.log(str2);

function reverseString() {
  var str2 = "";
  for (var i = str.length - 1; i >= 0; i--) {
    var char = str[i];
    str2 += char;
  }
  return str2;
}
