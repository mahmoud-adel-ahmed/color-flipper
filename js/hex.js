let allColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let btn = document.querySelector(".btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexVal = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = getRandomNumber(allColors);
    hexVal += allColors[randomNum];
    document.body.style.setProperty("background", hexVal);
  }
  color.textContent = hexVal;
});

function getRandomNumber(colors) {
  return Math.floor(Math.random() * colors.length);
}
