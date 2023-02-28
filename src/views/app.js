// Define a function to retrieve the user's listings and display them in a list
function displayListings(userId) {
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....', // Replace with your JWT token
    },
  };

  // Make a GET request to the API to retrieve the user's listings
  fetch(`${API_BASE_URL}/api/v1/auction/listings?_seller=${userId}`, options)
    .then(response => response.json())
    .then(data => {
      // Compile a Handlebars template for displaying the listings
      const source = document.getElementById('listing-template').innerHTML;
      const template = Handlebars.compile(source);
      const html = template({ listings: data });

      // Display the listings in a list
      const listingsContainer = document.getElementById('listings-container');
      listingsContainer.innerHTML = `
        <h1>My Listings</h1>
        <ul id="listings-list">${html}</ul>
      `;
    });
}

// Define a function to retrieve the bids for a specific listing and display them in a list
function displayBids(listingId) {
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....', // Replace with your JWT token
    },
  };

  // Make a GET request to the API to retrieve the bids for the listing
  fetch(`${API_BASE_URL}/api/v1/auction/listings/${listingId}/bids`, options)
    .then(response => response.json())
    .then(data => {
      // Compile a Handlebars template for displaying the bids
      const source = document.getElementById('bid-template').innerHTML;
      const template = Handlebars.compile(source);
      const html = template({ bids: data });

      // Display the bids in a list
      const bidListContainer = document.getElementById('bid-list-container');
      bidListContainer.innerHTML = `
        <h2>Bids</h2>
        <ul id="bid-list">${html}</ul>
      `;
    });
}

// Define a function to accept or reject a bid for a listing
function updateBidStatus(listingId, bidId, status) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....', // Replace with your JWT token
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  };

  // Make a POST request to the API to update the bid status
  fetch(
    `${API_BASE_URL}/api/v1/auction/listings/${listingId}/bids/${bidId}`,
    options
  )
    .then(response => response.json())
    .then(data => {
      // Update the UI to reflect the new bid status
      const bidListItem = document.querySelector(
        `#bid-list li[data-id="${bidId}"]`
      );
      bidListItem.innerHTML = `${data.bidder} - $${data.amount} - ${data.status}`;
    });
}

// When the page loads, display the user's listings
window.onload = () => {
  const userId = '123'; // Replace with the ID of the current user
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....'; // Replace with the user's auth token
  displayListings(userId, authToken);
};
