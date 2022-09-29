let counterValue = 0;
const valueContainer = document.getElementById("value");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const incValue = () => {
  counterValue += 1;
  valueContainer.textContent = counterValue;
};

const decValue = () => {
  counterValue -= 1;
  valueContainer.textContent = counterValue;
};

buttonDecrement.addEventListener("click", decValue);
buttonIncrement.addEventListener("click", incValue);
