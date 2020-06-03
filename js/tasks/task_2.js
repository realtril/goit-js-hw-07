const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// #1

const ul = document.getElementById('ingredients');

function getListContent(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let li = document.createElement('li');
    li.append(item);
    result.push(li);
  }
  return result;
}

ul.append(...getListContent(ingredients));

// #2

let food = document.querySelector('#ingredients');

food.innerHTML =
  '<ul>' +
  ingredients
    .map(function (ingredient) {
      return '<li>' + ingredient + '</li>';
    })
    .join('') +
  '</ul>';
