const prompt = require("prompt-sync")();
const c = parseInt(prompt("enter your first num "));
const d = parseInt(prompt("enter your second num "));
const sum = c + d;
const sub = c - d;
const mul = c * d;
console.log(
  "Your sum is" +
    sum +
    " " +
    "your subtraction is" +
    sub +
    " " +
    "your multipilcation is" +
    " " +
    mul
);
