let box = document.querySelectorAll(".box");

console.log(box);

box.forEach((e) => {
  e.addEventListener("click", () => {
    document.body.style.backgroundColor = e.id;
  });
});

document.querySelector("button").addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
