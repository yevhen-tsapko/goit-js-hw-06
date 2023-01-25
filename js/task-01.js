const categoriesListRef = document.querySelector("#categories");
const categoriesRef = categoriesListRef.children;

console.log("Number of categories: ", categoriesRef.length);

[...categoriesRef].forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const numberOfElements = category.querySelector("ul").children.length;
  console.log("Category: ", title);
  console.log("Elements: ", numberOfElements);
});
