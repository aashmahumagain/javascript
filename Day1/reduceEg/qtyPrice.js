const product = [
  {
    name: "laptop",
    price: 1000,
    qty: 2,
  },
  {
    name: "laptop",
    price: 1000,
    qty: 2,
  },
];
const total = product.reduce(
  (accumulator, value) => accumulator + value.price * value.qty,
  0
);
console.log(total);
