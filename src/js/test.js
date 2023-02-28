// A function that displays a list of all the user's listings
function showListings() {
  // Replace this with a call to your server-side API to retrieve the user's listings
  const listings = [
    { id: 1, title: 'Example Listing 1' },
    { id: 2, title: 'Example Listing 2' },
    { id: 3, title: 'Example Listing 3' },
  ];
  // A registered user can view Bids made on their Listing
  const listingsDiv = document.getElementById('listings');

  // Create a table to display the listings
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const idHeader = document.createElement('th');
  idHeader.textContent = 'Listing ID';
  headerRow.appendChild(idHeader);
  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Listing Title';
  headerRow.appendChild(titleHeader);
  table.appendChild(headerRow);

  // Add a row for each listing
  for (let listing of listings) {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    idCell.textContent = listing.id;
    row.appendChild(idCell);
    const titleCell = document.createElement('td');
    titleCell.textContent = listing.title;
    row.appendChild(titleCell);
    table.appendChild(row);
  }

  listingsDiv.appendChild(table);
}

// Add an event listener to the login form to show the user's listings when they log in
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  showListings();
});
