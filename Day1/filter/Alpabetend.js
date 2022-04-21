//3.create an array and print the name of the students ending  with alphabet 'n'
// const castes = ["humagain", "tamang"];
// const newCast = castes.filter((caste) => {
//   return caste.endsWith("n");
// });
// console.log(newCast);
const castes = ["humagain", "shrestha", "aasass"];
const newCaste = castes.find((Caste) => {
  return Caste.endsWith("a");
});
console.log(newCaste);
