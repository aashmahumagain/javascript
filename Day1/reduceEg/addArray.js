const number = [1, 2, 3, 4, 5];
const num = number.reduce((accumulator, value, index, arr) => {
  return accumulator + value;
});
console.log(num);
