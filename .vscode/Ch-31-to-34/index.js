//Chapter 31 to 34 Assignment

var myName = prompt("Enter your name");
var bDate = prompt("Enter your birth date");
var bMonth = parseInt(prompt("Enter your birth month"), 10);
var bYear = +prompt("Enter your birth year");
var month = [
	"january",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

var yourDob = new Date(month[bMonth - 1] + " " + bDate + "," + " " + bYear);

var date = new Date();
var hours = date.getHours();
var years = date.getFullYear();
var months = date.getMonth();
var days = date.getDate();

var age = years - bYear;
var ageInDays = Math.ceil((date - yourDob) / (1000 * 60 * 60 * 24));
var ageInHours = Math.ceil((date - yourDob) / (1000 * 60 * 60));

if (hours >= 8 && hours <= 12) {
	console.log("Hello " + myName + "," + " Good Morning");
} else if (hours >= 12 && hours < 16) {
	console.log("Hello " + myName + "," + " Good After noon");
} else if (hours >= 16 && hours <= 18) {
	console.log("Hello " + myName + "," + " Good evening");
} else {
	console.log("Hello " + myName + "," + " Good Night");
}

if (date.getMonth() + 1 < bMonth) {
	var daysToBd =
		(bMonth - (date.getMonth() + 1)) * 30 + (bDate - date.getDate());
} else if (date.getMonth() + 1 === bMonth) {
	if (date.getDate() < bDate) {
		daysToBd = bDate - date.getDate();
	} else {
		daysToBd = (bMonth - (date.getMonth() + 1)) * 30 + (bDate - date.getDate());
		if (daysToBd < 0) {
			daysToBd = 365 + daysToBd;
		}
	}
} else {
	daysToBd =
		(12 - (date.getMonth() + 1) + bMonth) * 30 + (bDate - date.getDate());
}

if (
	date.getMonth() === yourDob.getMonth() &&
	(now.getDay() === yourDob.getDay()) === 0
) {
	console.log("It's your birthday today");
}

console.log("Your DOB is " + yourDob);
console.log("You are " + age + " years old");
console.log("Your age in Days is ", ageInDays);
console.log("Your age in Hours is ", ageInHours);

if (daysToBd === 0) {
	console.log("Happy Birthday", myName, "!!!");
} else {
	console.log("Days to your Birthday:  ", daysToBd);
}
