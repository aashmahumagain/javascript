//5.Filter the student details  who eat pizza

const names = [
  {
    name: "a",
    food: "pizza",
    drinks: "coke",
  },
  {
    name: "salman",
    food: "burger",
    drinks: "somersby",
  },
];

const newNames = names.filter((abc) => {
  return abc.food == "pizza";
});
console.log(newNames);
