const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const taskTwo = document.querySelector("ul#ingredients");

const markUp = ingredients.map((item) => {
  const newLiRef = document.createElement("li");
  newLiRef.textContent = item;
  return newLiRef;
});
taskTwo.append(...markUp);
console.log(markUp);
