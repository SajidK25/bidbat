const listingsData = [
  { id: 1, name: 'Listing 1', description: 'Description 1' },
  { id: 2, name: 'Listing 2', description: 'Description 2' },
  { id: 3, name: 'Listing 3', description: 'Description 3' },
];

function getListings() {
  // code to retrieve listings data from server or database
  return listingsData;
}

function displayListings(query) {
  const listings = getListings();
  const filteredListings = listings.filter(listing => {
    const name = listing.name.toLowerCase();
    const description = listing.description.toLowerCase();
    return name.includes(query) || description.includes(query);
  });

  const listingsElement = document.getElementById('listings');
  listingsElement.innerHTML = '';

  filteredListings.forEach(listing => {
    const listingElement = document.createElement('div');
    listingElement.innerHTML = `
      <h2>${listing.name}</h2>
      <p>${listing.description}</p>
    `;
    listingsElement.appendChild(listingElement);
  });
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();
  displayListings(query);
});
