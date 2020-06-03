// Напиши скрипт,
// который реагирует на изменение значения
//  input#font - size - control(событие input) и
//  изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRefer = document.querySelector('#font-size-control');

inputRefer.addEventListener('input', event => {
  console.log(7);
  document.querySelector('span#text').style.fontSize =
    event.target.value + 'px';
});
