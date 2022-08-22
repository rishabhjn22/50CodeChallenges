// Calculate the average of the numbers in an array of numbers


var abc = [2,3,5,6,7]
var sum = 0
function sumOfArrays(){
	for(var i = 0 ; i < abc.length; i++){
		sum += abc[i]/2

	}
	console.log(sum)

}

sumOfArrays()