//
const object1 = {
  a: "somestring",
  b: 42,
};

for (let [key] of Object.entries(object1)) {
  console.log(`${key}`);
}
