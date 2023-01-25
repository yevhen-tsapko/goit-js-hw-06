function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".widget button");
const outputColor = document.querySelector(".widget span");
const body = document.querySelector("body");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  outputColor.textContent = randomColor;
});
