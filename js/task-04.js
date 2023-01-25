let counterValue = 0;

const counterRef = document.querySelector("span");
const decrementButton = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementButton = document.querySelector(
  `button[data-action="increment"]`
);

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
});
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
});
