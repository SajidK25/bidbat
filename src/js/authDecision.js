document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('authLogin');
    const logoutButton = document.querySelector('#logout-link');
    const registerButton = document.querySelector('#registerLink');
    const loginButton = document.querySelector('#login-link');

    if (!user) {
        logoutButton.style.display = 'none';
        registerButton.style.display = 'visible';
        loginButton.style.display = 'visible';
    }

    if (user) {
        logoutButton.style.display = 'visible';
        registerButton.style.display = 'none';
        loginButton.style.display = 'none';
    }
  });