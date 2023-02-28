class ListingView {
  constructor(container) {
    this.container = container;
  }

  render(listings) {
    let html = '';
    listings.forEach((listing) => {
      html += `
        <div class="listing">
          <h2>${listing.title}</h2>
          <p>Description: ${listing.description}</p>
          <p>Ends at: ${listing.endsAt}</p>
        </div>
      `;
    });
    this.container.innerHTML = html;
  }
}

export default ListingView;
