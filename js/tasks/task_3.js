const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listPics = document.querySelector('#gallery');

const allPics = images
  .map(image => {
    const li = `
   <li class="item-class">
       <img class="picture" src="${image.url}" alt="${image.alt}" width=250 ">
   </li>
   `;
    return li;
  })
  .join(' ');

console.log(allPics);

listPics.insertAdjacentHTML('beforeend', allPics);

// html {
//   background: linear - gradient(to right, #b24592, #f15f79);
// }

// ul {
//   display: flex;
//   flex - wrap: wrap;
// }

// li {
//   height: 23vh;
//   list - style: none;
//   flex - grow: 1;
//   padding: 20px;
// }

// img {
//   max - height: 100 %;
//   min - width: 100 %;
//   object - fit: cover;
//   vertical - align: bottom;
// }
