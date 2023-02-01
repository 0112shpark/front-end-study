console.log("안녕");
let user = {
  name: "dd",
  age: 44,
  isvalud: true,
};
function hello() {
  return 13;
}
console.log(hello());
let boxEl = document.querySelector(".box1");
console.log(boxEl);

// boxEl.addEventListener("click", function () {
//   console.log("Click!");
//   boxEl.classList.add("active");
//   console.log(boxEl.classList.contains("active"));
//   boxEl.classList.remove("active");
// });
let boxEls = document.querySelectorAll(".box");
boxEls.forEach(function (name, index) {
  name.classList.add(`order-${index + 1}`);
  console.log(index, name);
});
let boxElss = document.querySelector(".box");
console.log(boxElss.textContent);
boxElss.addEventListener("click", function () {
  boxElss.textContent = "box!";
  console.log(boxElss.textContent);
});
