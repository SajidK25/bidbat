const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', event => {
  if (!nameInput.value) {
    nameInput.classList.add('is-invalid');
    nameError.style.display = 'block';
    event.preventDefault();
  } else {
    nameInput.classList.remove('is-invalid');
    nameError.style.display = 'none';
  }

  if (!emailInput.checkValidity()) {
    emailInput.classList.add('is-invalid');
    emailError.style.display = 'block';
    event.preventDefault();
  } else {
    emailInput.classList.remove('is-invalid');
    emailError.style.display = 'none';
  }

  if (!messageInput.value) {
    messageInput.classList.add('is-invalid');
    messageError.style.display = 'block';
    event.preventDefault();
  } else {
    messageInput.classList.remove('is-invalid');
    messageError.style.display = 'none';
  }
});
