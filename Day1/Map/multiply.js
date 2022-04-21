// 2.create an array using function and multiply each array element and add an index number .[map]
const numbers = [2, 4, 6, 8, 10];
const newArr = numbers.map((item, index) => {
  return item * 10 + index;
});
console.log(newArr);
