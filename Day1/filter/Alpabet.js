//2.create an array and print the name of the students starting with alphabet 'A'
// const names = ["aashma", "aashik", "ram", "shyam"];
// const newName = names.filter((name) => {
//   return name.startsWith("a");
// });
// console.log(newName);
// const names = ["aashma", "aashik", "kabita"];
// const newName = names.filter((name) => {
//   return name.startsWith("a");
// });
const names = ["aashma", "ram"];
const newName = names.filter((name) => {
  return name.endsWith("a");
});
console.log(newName);
