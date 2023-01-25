const input = document.querySelector("input");

input.addEventListener("blur", onValidate);

function onValidate(event) {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
