const inputEl = document.getElementById('name-input');

const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', function () {
  const inputValue = inputEl.value.trim();

  outputEl.textContent = inputValue.length > 0 ? inputValue : 'Anonymous';
});
