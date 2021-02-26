//Chapter 35 to 38 Assignment
// Second Assignment

var test = prompt("Please enter a number");
//var result = 1;

function fact(input) {
	if (input == 0 || input == 1) {
		return input;
	} else {
		var result = 1;
		for (i = 2; i <= input; i++) {
			result = result * i;
		}
		return result;
	}
}
var answer = fact(test);
console.log(answer);
