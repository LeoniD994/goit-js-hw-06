const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = document.querySelector('#ingredients')
const newListArr = []

ingredients.forEach((ingredient) => {

  const listArr = document.createElement("li");
  listArr.textContent = ingredient;
  listArr.classList.add('item');
  newListArr.push(listArr)

}
);
items.append(...newListArr);
console.log(newListArr)