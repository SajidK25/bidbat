function onLogout() {
  const auth = localStorage.getItem('authLogin');

  if (auth) {
    // Remove the LocalStorage..
    localStorage.removeItem('authLogin');
   

    localStorage.removeItem('authCheck');
  

    // Redirect to Login page..
    window.location.href = '/src/public/login.html';
  }
}

const logoutBtn = document.getElementById('logout-link');
const auth = localStorage.getItem('authLogin');

if (!auth) {
  logoutBtn.style.display = 'none';
}
