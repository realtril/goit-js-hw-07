// Напиши скрипт который, при наборе текста в
// инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');
let defaultValue = 'незнакомец';
inputRef.addEventListener('input', event => {
  if (event.target.value != '') {
    textRef.textContent = event.target.value;
  } else {
    textRef.textContent = defaultValue;
  }
});
