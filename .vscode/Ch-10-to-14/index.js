// Chapter 10 to 14
// Make a Calculator

var num1 = parseInt(prompt("Enter first Number "));

var num2 = parseInt(prompt("Enter second Number "));

var sign = prompt("Enter sign ");

if (sign === "*") {
	alert(num1 + sign + num2 + "=" + num1 * num2);
} else if (sign === "-") {
	alert(num1 + sign + num2 + "=" + num1 - num2);
} else if (sign === "+") {
	alert(num1 + sign + num2 + "=" + num1 + num2);
} else if (sign === "/") {
	alert(num1 + sign + num2 + "=" + num1 / num2);
} else if (sign === "%") {
	alert(num1 + sign + num2 + "=" + (num1 % num2));
} else {
	alert("Invlad input");
}
