// https://api.noroff.dev/api/v1/auction/listings/778c0ab3-5659-43ac-8451-6d931f9e656c
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const viewListing = `https://api.noroff.dev/api/v1/auction/listings/${id}`;

// Let's take the accessToken
const authToken = localStorage.getItem('authLogin');

const options = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authToken}`,
};

// Taking the elements..
let cardTitle = document.querySelector('.card-title');
let cardText = document.querySelector('.card-text');
let bidsAmount = document.querySelector('#bids');
let productImg = document.querySelector('#productImg');
let amount = document.querySelector('#amount');

// Just Send the new Product to the API...
fetch(`${viewListing}`, {
  method: 'GET',
  headers: options,
})
  .then(response => response.json())
  .then(res => {
    if (res.errors) {
      const message = res.errors[0].message;
      alert(message);
    }
    cardTitle.innerHTML = res.title;
    cardText.innerHTML = res.description;
    bidsAmount.innerHTML = res._count.bids;
    productImg.setAttribute('src', res.media[0]);
  })
  .catch(err => {
    console.log('Error -- ', err.message);
  });

// Working When You Click to Add Bid..
function bitSubmit() {
  const user = localStorage.getItem('authLogin');
  if (!user) {
    window.location.href = '/src/public/login.html';
  }

  if (user) {
    // alert('Got User ' + user);

    const bidURL = `https://api.noroff.dev/api/v1/auction/listings/${id}/bids`;

    fetch(`${bidURL}`, {
      method: 'POST',
      headers: options,
      body: JSON.stringify({
        amount: Number(amount.value),
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          const message = data.errors[0].message;
          alert(message);
        } else {
          const successMessage = `Your bid of ${amount.value} has been made successfully!`;
          const successElement = document.createElement('div');
          successElement.innerHTML = successMessage;
          successElement.classList.add('success-message');
          document.querySelector('.form-group').appendChild(successElement);
          amount.value = '';
        }
      })
      .catch(e => {
        console.log('Error is there', e);
      });
  }
}
