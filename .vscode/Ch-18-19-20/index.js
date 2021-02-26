// Chapter 18, 19, 20 assignment

var courses = [];

for (var i = 0; i < 5; i++) {
	course = prompt("Please Enter Your Courses");
	courses.push(course);
}
alert(courses);

for (var i = 0; i < 5; i++) {
	var c1 = prompt("Course" + (i + 1), courses[i]);
	if (c1 != courses[i]) {
		courses.splice(i, 1, c1);
	}
}

alert(courses);
