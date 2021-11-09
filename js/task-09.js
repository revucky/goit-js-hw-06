const bgRef = document.querySelector(".change-color");
bgRef.addEventListener("change", () => {
  bgRef.style.backgroundColor = ;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
