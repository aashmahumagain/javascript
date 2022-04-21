// Write a JavaScript conditional statement to sort three numbers.
const prompt = require("prompt-sync")();
const num1 = parseInt(prompt("Enter the first num1 "));
const num2 = parseInt(prompt("enter the second number "));
const num3 = parseFloat(prompt("enter the third number "));
if ((num1 > num2) & (num2 > num3)) {
  console.log("the number in sorted order is " + num1, num2, num3);
} else if ((num2 > num3) & (num2 > num1)) {
  console.log("the number in sorted order is " + num2, num3, num1);
} else if ((num2 > num1) & (num1 > num3)) {
  console.log("the number in sorted order is " + num2, num1, num3);
} else if ((num2 > num3) & (num3 > num1)) {
  console.log("the number in sorted order is " + num2, num3, num1);
} else if ((num3 > num1) & (num1 > num2)) {
  console.log("the number in sorted order is " + num3, num1, num2);
} else if ((num3 > num2) & (num2 > num1)) {
  console.log("the number in sorted order is " + num3, num2, num1);
} else if ((num2 < num3) & (num2 < num1) & (num3 < num1)) {
  console.log("the number in sorted order is " + num1, num3, num2);
} else {
  console.log("the number is equal");
}
