/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const loginUrl = 'https://api.noroff.dev/api/v1/auction/auth/login';

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loadingDiv = document.getElementById('loading-div');

  // Show the loading div
  loadingDiv.style.display = 'block';

  setTimeout(() => {
    fetch(`${loginUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        // Do After Login..
        // Setting the LocalStorage Here..
        localStorage.setItem('authLogin', data.accessToken);
        console.log(data);

        localStorage.setItem('authCheck', 'YES');
        console.log(data);

        const credits = data.credits;
        // Redirect to the another page..
        console.log('Location is Going to be Redirect');
        window.location.href = `view-credit.html?credits=${credits}`;

        // Hide the loading div
        setTimeout(() => {
          loadingDiv.style.display = 'none';
        }, [2000]);
      })
      .catch(e => {
        console.log('Error is there', e);
        // Hide the loading div
        loadingDiv.style.display = 'none';
      });
  }, [2000]);
}
