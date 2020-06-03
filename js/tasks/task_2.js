const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.getElementById('ingredients');

function getListContent(array) {
  let result = [];

  for (let i = 1; i <= array.length; i++) {
    let item = array[i];
    let li = document.createElement('li');
    li.append(item);
    result.push(li);
  }

  return result;
}

ul.append(...getListContent(ingredients)); // append + оператор "..." = друзья!
