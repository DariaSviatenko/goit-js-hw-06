
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.getElementById('ingredients');

ingredients.forEach(el => {
  const a = document.createElement('li');
  console.log(a);
  a.textContent = el;
  console.log(a.textContent);
  a.classList.add('item');
  console.log(a.classList);
  ul.appendChild(a);
});
