// Chapter 15,16,17 assignment

var courses = [];
courses.push(prompt("Enter First Course"));
courses.push(prompt("Enter second Course"));
courses.push(prompt("Enter thired Course"));
courses.push(prompt("Enter Fourth Course"));
courses.push(prompt("Enter Fifth Course"));

alert(courses);
var course1Value = courses[0];
prompt("course1", course1Value);
var course2Value = courses[1];
prompt("course2", course2Value);
var course3Value = courses[2];
prompt("course3", course3Value);
var course4Value = courses[3];
prompt("course4", course4Value);
var course5Value = courses[4];
prompt("course5", course5Value);

var course1ValueEdit = prompt("course1valueedita", course1Value);

courses.splice(0, 1, course1ValueEdit);

alert(courses);
