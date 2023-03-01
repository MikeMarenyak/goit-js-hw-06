
const counter = document.getElementById('counter');
const value = document.getElementById('value');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue--;
  value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});
