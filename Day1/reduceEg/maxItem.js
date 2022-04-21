const num = [1, 3, 7, 9];
const nums = num.reduce((accumulator, value, index, arr) => {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
});
console.log(nums);
