// Chapter 21 to 30 Assaignment
// Assainment-1

var dNumber = prompt("Please enter decimal number");
var greaterNumber = Math.ceil(dNumber);
alert(greaterNumber);

var text = "This is a dummy text";

var sliceText = text.slice(0, greaterNumber);
var reverseText = "";
for (i = greaterNumber - 1; i > -1; i--) {
	reverseText += sliceText.charAt(i);
}
alert(reverseText);
