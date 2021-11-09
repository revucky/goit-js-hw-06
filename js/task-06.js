const refs = document.querySelector("#validation-input");

refs.addEventListener("blur", () => {
  if (refs.value.length === Number(refs.dataset.length)) {
    resetClass("valid", "invalid");
  } else {
    resetClass("invalid", "valid");
  }
});
function resetClass(addcl, delcl) {
  refs.classList.add(addcl);
  refs.classList.remove(delcl);
}
