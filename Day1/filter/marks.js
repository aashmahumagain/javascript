//6.Filter the student name who got the marks more than 60 in science
const students = [
  {
    name: "ram",
    marks: 60,
    grade: 30,
  },
  {
    name: "shyam",
    marks: 80,
    grade: 80,
  },
];
let newStudents = students.filter((point) => {
  if (point.marks > 60) {
    console.log(point.name);
  }
});
