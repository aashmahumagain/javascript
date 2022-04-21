// let a = [1, 2, 3, 4];
// console.log(a.join(" "));

// let b = [1, 2, 3];
// c = b.forEach((item, index, arr) => {
//   console.log("a[" + index + "]=" + item);
// });

// let sum = [1, 2, 3];
// const add = sum.forEach((item, index, arr) => {
//   console.log("a[" + index + "]=" + item);
// });

// let aashma = [1, 2, 3, 4, 5, 6];
// let sum = 1;
// total = aashma.forEach((item, index, arr) => {
//   arr = item * 6;
//   console.log(arr);
// });

// let letters = ["ashma", "b", "ashma", "d", "a"];
// let count = {};
// letters.forEach((item, index, arr) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });
// console.log(count);

// let num = [1, 2, 3, 4];
// let newNum = num.map((item, index, arr) => {
//   return item * 2;
// });
// console.log(newNum);

// const product = [
//   {
//     name: "laptop",
//     price: 2000,
//     qty: 2,
//   },
//   {
//     name: "tv",
//     price: 2000,
//     qty: 2,
//   },
// ];
// const output = product.map((item, index, arrr) => {
//   name: item.name;
//   totaalprice: item.price * item.qty;
// });
// console.log(output);

// let a = ["1", "2", "3"];
// const num = a.map(Number);
// console.log(num);

// const details = [
//   {
//     name: "aashma",
//     age: 21,
//   },
//   {
//     name: "aashik",
//     age: 20,
//   },
// ];
// const detail = details.map((item, index, arr) => {
//   if (item.name == "aashma") {
//     console.log(item.age);
//   }
// });
//remove an duplicate from araay
const num = [1, 2, 3, 4, 5, 3, 2, 1];
const nums = num.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log(nums);
