const numberOfCategory = document.querySelectorAll(".item");
console.log(`number of categories: ${numberOfCategory.length}`);

[...numberOfCategory].forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elments: ", item.querySelectorAll("li").length);
});
