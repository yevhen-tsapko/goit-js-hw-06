const boxesWrap = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  const boxesCollection = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesCollection.push(box);
  }
  return boxesCollection;
}
function destroyBoxes() {
  const boxesWrapChildren = [...boxesWrap.children];
  boxesWrapChildren.forEach((div) => div.remove());
}

createBtn.addEventListener("click", () => {
  const numberOfBoxes = input.value;

  boxesWrap.append(...createBoxes(numberOfBoxes));
});

destroyBtn.addEventListener("click", destroyBoxes);
