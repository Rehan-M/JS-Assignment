// First Assignment

var inputValue = prompt("Please enter your course");

function courseName(string) {
	var splitStr = string.toLowerCase().split(" ");

	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] =
			splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}

	return splitStr.join(" ");
}

var string = courseName(inputValue);
console.log(string);
