function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');

  boxesContainer.innerHTML = '';

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '17px';
    boxes.push(div);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputField = document.querySelector('input[type="number"]');

createButton.addEventListener('click', () => {
  const amount = Number(inputField.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  inputField.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
