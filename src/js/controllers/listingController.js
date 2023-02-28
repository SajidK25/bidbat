import ListingView from '../views/listingView.js';

class ListingController {
  constructor() {
    this.listingView = new ListingView(
      document.querySelector('#listing-container')
    );
  }

  async getListings() {
    try {
      const response = await fetch('/api/listings');
      const listings = await response.json();
      this.listingView.render(listings);
    } catch (error) {
      console.error(error);
    }
  }

  async createListing(listing) {
    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing),
      });
      const newListing = await response.json();
      return newListing;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteListing(id) {
    try {
      const response = await fetch(`/api/listings/${id}`, {
        method: 'DELETE',
      });
      const deletedListing = await response.json();
      return deletedListing;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ListingController;
