const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {};

  let allFieldsFilled = true;

  for (const element of loginForm.elements) {
    if (element.tagName === 'BUTTON') continue;

    const value = element.value.trim();
    formData[element.name] = value;

    if (value === '') {
      allFieldsFilled = false;
    }
  }
  if (!allFieldsFilled) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  loginForm.reset();
});
