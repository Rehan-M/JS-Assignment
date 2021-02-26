// Chapter 21 to 30 Assaignment
// Assainment-2

var inputValue = prompt("Please enter string.");

var allChars = inputValue.slice(0);

allChars = allChars.toLowerCase();

var words = allChars.split(" ");

for (var i = 0; i < words.length; i++) {
	words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
var newLine = words.join(" ");
console.log(newLine);
