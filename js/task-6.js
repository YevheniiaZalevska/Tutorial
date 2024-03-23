document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxes = [];
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      size += 10;
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); 
      createBoxes(amount);
    }
    input.value = ''; 
  });

  destroyButton.addEventListener('click', destroyBoxes);
});

