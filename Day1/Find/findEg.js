//program to find first element of an array  from array after the number is greater than 10
// ----find return the first number of the condition and if false return undefined.

// The Array.find() method takes a callback function as parameter and executes that function once for each element present in the array, until it finds one where the function returns a true value.
// If the element is found it returns the value of the element, otherwise undefined is returned.

const arrs = [1, 2, 3, 4, 5, 6];
const newArr = arrs.find((arr) => {
  return arr < 5;
});
console.log(newArr);
