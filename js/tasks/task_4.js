let counterValue = parseInt(document.querySelector('#value').textContent);
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

increment.addEventListener('click', function () {
  counterValue++;
  document.querySelector('#value').textContent = counterValue;
});

decrement.addEventListener('click', function () {
  counterValue--;
  document.querySelector('#value').textContent = counterValue;
});
