// Array.findIndex() is similar to Array.find() but it returns the index of the matched element.If the element does not exist then -1 is returned.

var descp = [
  {
    id: 1,
    title: "science",
    moral: "be a dr",
  },
  {
    id: 2,
    title: "computer science",
    moral: "be a engineer",
  },
];
var find = descp.findIndex((post, index) => {
  if (post.title == "science") return true;
});
console.log(find);
