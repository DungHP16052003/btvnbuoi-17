const studentsList = ["Minh", "Cong", "Manh", "Dung", "Vinh"];
console.log(studentsList.length);
console.log(typeof studentsList);
console.log(Array.isArray(studentsList));
console.log(studentsList[1]);
console.log(studentsList[6]);
studentsList[6] = undefined;
console.log(studentsList);
studentsList[20] = "Dung";
console.log(studentsList);
console.log(studentsList.length);

