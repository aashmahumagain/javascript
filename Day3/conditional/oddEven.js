// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
var i = 0;
for (i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(i + "the num is even ");
  } else if (i % 2 == 0) {
    console.log(i + "the num is even");
  } else {
    console.log(i + "the num is odd");
  }
}
