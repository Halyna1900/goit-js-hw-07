const categoriesList = document.getElementById('categories');

const items = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('ul > li').length;
  console.log(`Category: ${title},
Elements: ${itemsCount}`);
});
