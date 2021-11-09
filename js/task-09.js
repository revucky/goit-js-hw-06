const bgRef = {
  spanRef: document.querySelector(".color"),
  btnRef: document.querySelector("button"),
  bodyRef: document.querySelector("body"),
};

bgRef.btnRef.addEventListener("click", () => {
  const color = getRandomHexColor();
  bgRef.bodyRef.style.backgroundColor = color;
  bgRef.spanRef.textContent = color;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
