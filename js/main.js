let colors = ["green", "blue", "rgb(50,152,75)", "#fac10d"];

let btn = document.querySelector(".btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNum = getRandomNumber(colors);
  document.body.style.setProperty("background", colors[randomNum]);
  color.textContent = colors[randomNum];
});

function getRandomNumber(colors) {
  return Math.floor(Math.random() * colors.length);
}
