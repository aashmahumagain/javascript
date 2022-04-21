//return a first oobject
var example = {
  foo1: {
    name: "ram",
  },
  foo2: {
    age: 12,
  },
  foo3: {
    caste: "humagain",
  },
};

let [first] = Object.keys(example);

console.log(first);
