const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', ev => {
  console.log(6);
  if (ev.target.value.length <= inputRef.dataset.length) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
});
