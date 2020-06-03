const categoriesLght = document.querySelectorAll('#categories .item').length;
console.log(`В списке ${categoriesLght} категории.`);
const h2s = document.querySelectorAll('h2');

const quantity = document.querySelectorAll('h2 + ul');

h2s.forEach((element, item) =>
  console.log(
    `Категория: ${element.textContent} \nКоличество элементов: ${quantity[item].childElementCount}`,
  ),
);
