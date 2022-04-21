//return an  new array
const arr = [
  { name: "sujan", location: "ktm" },
  { name: "bikash", location: "ktm" },
  { name: "aashma", location: "banepa" },
];
const obj = {
  kathmandu: ["sujan", "bibas"],
  banepa: ["aashma"],
};
const makeObj = (array) => {
  const result = {};
  array.foreach((item, index) => {
    result[item.location.toLowerCase()] = [
      ...(result[item.location.toLowerCase()] || []),
      item.name,
    ];
  });

  return result;
};
// makeObj(arr);
