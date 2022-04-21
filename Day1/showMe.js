// const num = [1, 2, 3, 4, 5, 6];
// num.forEach((item, index, arr) => {
//   console.log("a[" + index + "]=" + item);
// });
//multiply each item with index
// const numbers = [1, 2, 3, 4];
// let sum = 0;
// const num = numbers.forEach((item, index, arr) => {
//   //   sum += item;
//   console.log((arr = item * index));
// });
// console.log(sum);

//to find how much letter is repeating in an arrya
// const letters = ["a", "b", "a", "c", "d"];
// const count = {};
// letters.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });
// console.log(count);

//Map function
// const numbers = [1, 2, 3, 4, 5];
// const num = numbers.map((value, index, arr) => {
//   return value * 2;
// });
// console.log(num);

// const product = [
//   {
//     name: "laptop",
//     price: 2000,
//     qty: 3,
//   },
//   {
//     name: "fan",
//     price: 2200,
//     qty: 5,
//   },
//   {
//     name: "solar",
//     price: 2100,
//     qty: 2,
//   },
// ];
// const total = product.map((item, index, arr) => ({
//   name: item.name,
//   totalprice: item.price * item.qty,
// }));
// console.log(total);

//array of string to number
// const str = ["1", "2", "3", "4"];
// const num = str.map(Number);
// console.log(num);

//Filter
// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter((value, index, arr) => {
//   if (value % 2 !== 0) {
//     return value;
//   }
// });
// console.log(even);

//return only the name of the given condition
// const details = [
//   {
//     name: "aashma",
//     age: 21,
//     roll: 1,
//   },
//   {
//     name: "ram",
//     age: 18,
//     roll: 2,
//   },
// ];
// const validate = details.filter((value) => {
//   if (value.age >= 20) {
//     console.log(value.name, value.roll);
//   }
// });
//

//Remove the duplicate element from an array
// const numbers = [1, 2, 3, 1, 2, 5, 6, 8];
// const num = numbers.filter((value, index, array) => {
//   return array.indexOf(value) === index;
// });
// console.log(num);
