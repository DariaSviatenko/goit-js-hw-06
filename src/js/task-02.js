const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.getElementById("ingredients");

const items = ingredients.map((ingredient) => {
  const a = document.createElement("li");
  a.textContent = ingredient;
  a.classList.add("item");
  return a;
});
ul.append(...items);

