const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { login, password } = event.currentTarget.elements;
  console.dir(login, password);
  let flag = false;
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
    if (!value) {
      flag = true;
    }
  });
  if (flag) {
    return alert("text");
  }
  console.log(object);
  // if (login.value === "" || password.value === "") {
  //   return alert
  // }
  // console.log(`Login: ${login.value}, Password: ${password.value}`);
  // event.currentTarget;
  // event.currentTarget.reset();
}
