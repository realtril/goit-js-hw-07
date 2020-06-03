// Напиши скрипт,
// который реагирует на изменение значения
//  input#font - size - control(событие input) и
//  изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

document
  .querySelector('input')
  .addEventListener(
    'input',
    event =>
      (document.querySelector('span#text').style.fontSize =
        event.target.value + 'px'),
  );

{
  /* <input id="font-size-control" type="range" />
    <br />
    <span id="text">Абракадабра!</span> */
}
