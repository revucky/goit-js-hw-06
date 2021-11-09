const refs = {
  input: document.querySelector("input#name-input"),
  output: document.querySelector("span#name-output"),
};
refs.input.addEventListener("input", valid);
function valid(event) {
  const value = event.target.value.trim();
  const text = value ? value : "Anonymous";
  refs.output.textContent = text;
}

// taskFive.input.addEventListener("input", (event) => {
//   taskFive.output.textContent = event.currentTarget.value;
//   taskFive.input !== ""
//     ? (taskFive.output.innerText = taskFive.input.trim())
//     : "Anonymous";
// });
