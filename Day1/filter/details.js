//4.create an array print details (only name,only age) if the height is greater or equal to 6
const details = [
  {
    name: "aashma",
    gender: "female",
    height: 5.5,
  },
  {
    name: "ram",
    gender: "male",
    height: 6,
  },
  {
    name: "shyaam",
    gender: "male",
    height: 4,
  },
];
const newDetails = details.filter((detail) => {
  if (detail.height < 6) {
    console.log(detail.name);
  }
});
