import ListingView from '../views/listingView.js';

class ListingController {
  constructor() {
    this.listingView = new ListingView(
      document.querySelector('#listing-container')
    );
  }

  async getListings() {
    try {
      const response = await fetch('/api/v1/auction/listings');
      const listings = await response.json();
      this.listingView.render(listings);
    } catch (error) {
      console.error(error);
    }
  }

  async createListing(listing) {
    try {
      const response = await fetch('/api/v1/auction/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing),
      });
      const newListing = await response.json();
      console.log('Listing created:', newListing);
    } catch (error) {
      console.error(error);
    }
  }

  async updateListing(id, listing) {
    try {
      const response = await fetch(`/api/v1/auction/listings/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing),
      });
      const updatedListing = await response.json();
      console.log('Listing updated:', updatedListing);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteListing(id) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`/api/v1/auction/listings/${id}`, {
        method: 'DELETE',
      });
      console.log('Listing deleted:', id);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ListingController;
