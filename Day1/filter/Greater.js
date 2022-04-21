//1.create an array and filter the item greater than 5

const numbers = [2, 3, 5, 7];
const newNumbers = numbers.filter((item) => {
  return item > 5;
});
console.log(newNumbers);
