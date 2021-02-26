//Ch 39 to 42 Assignment

var totalMarks = 500;
var c1 = parseInt(prompt("Please enter Course 1 Numbers"));
var c2 = parseInt(prompt("Please enter Course 2 Numbers"));
var c3 = parseInt(prompt("Please enter Course 3 Numbers"));
var c4 = parseInt(prompt("Please enter Course 4 Numbers"));
var c5 = parseInt(prompt("Please enter Course 5 Numbers"));

var obtainedMarks = c1 + c2 + c3 + c4 + c5;

var percent = (obtainedMarks * 100) / totalMarks;

switch (true) {
	case percent >= 90 && percent <= 100:
		alert("Grade A+");
		break;
	case percent >= 75 && percent <= 89:
		alert("Grade A");
		break;
	case percent >= 60 && percent <= 74:
		alert("Grade B");
		break;
	case percent >= 45 && percent <= 60:
		alert("Grade C");
		break;
	case percent >= 30 && percent <= 44:
		alert("Grade D");
		break;
	case percent >= 0 && percent <= 29:
		alert("Grade F");
		break;
	default:
		alert("Your dream to become a developer is over");
}
