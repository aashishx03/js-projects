let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const heightInM = height.value / 100;

  const bmi = Math.round(weight.value / heightInM ** 2);
  document.querySelector("#value").innerHTML = bmi;
});
