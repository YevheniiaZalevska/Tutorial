
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const updateOutput = () => {
  const trimmedInput = input.value.trim();
  
  output.textContent = trimmedInput || 'Anonymous';
};

input.addEventListener('input', updateOutput);
