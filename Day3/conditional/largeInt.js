// Write a JavaScript program that accept two integers and display the larger.
const prompt = require("prompt-sync")();
const num1 = parseInt(prompt("enter the first Integer "));
const num2 = parseInt(prompt("enter the second Integer "));

if (num1 > num2) {
  console.log("the greater number that u entered is " + " " + num1);
} else if (num1 < num2) {
  console.log("the greater num is " + " " + num2);
} else {
  console.log("the number is equal");
}
