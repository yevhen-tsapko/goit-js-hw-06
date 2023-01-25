const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email && password) {
    const inputData = { email, password };
    console.log(inputData);
    form.reset();
  } else alert("Заповніть всі поля!");
}
