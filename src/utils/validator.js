/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
const registerUrl = 'https://api.noroff.dev/api/v1/social/auth/register';
const registerButton = document.getElementById('register-button');

function register() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const avatar = document.getElementById('avatar').value;

  const data = {
    name: name,
    email: email,
    password: password,
  };

  if (avatar) {
    data.avatar = avatar;
  }

  fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.status === 200) {
        const successMessage = document.getElementById('success-message');
        successMessage.innerHTML = 'Registration successful';
      } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerHTML = 'Error: Registration failed';
        console.error('Error:', response.status);
      }
      // Remove the second call to response.json()
      return response.json();
    })
    .then(data => {
      document.getElementById('error-message').innerHTML = '';

      if (data.errors) {
        document.getElementById('error-message').innerHTML = data.errors[0].message;
      }

      if (!data.errors) {
        document.getElementById('success-message').innerHTML = 'Registration Successful';
      }

       // The password value must be at least 8 characters.
      // console.log(data);

      // redirect the user to login...
      window.location.href = 'login.html';
    })
    .catch(error => {
      console.error('Error:', error[0]);
    });
}

