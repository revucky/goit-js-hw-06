const taskSeven = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

taskSeven.addEventListener("input", () => {
  console.log(taskSeven.value);
  text.style.fontSize = taskSeven.value + "px";
});

// const fontSize = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// fontSize.addEventListener("input", () => {
//   text.style.fontSize = fontSize.value + "px";
// });
