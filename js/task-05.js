const outputGreting = document.querySelector("span#name-output");
const inputName = document.querySelector("input, #name-output");

inputName.addEventListener("input", (event) => {
  outputGreting.textContent = event.currentTarget.value
    ? (outputGreting.textContent = event.currentTarget.value)
    : (outputGreting.textContent = "Anonymous");
});
