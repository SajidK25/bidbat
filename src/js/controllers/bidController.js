import BidView from '../views/bidView.js';

class BidController {
  constructor() {
    this.bidView = new BidView(document.querySelector('#bid-container'));
  }

  async getBids(listingId) {
    try {
      const response = await fetch(`/api/listings/${listingId}/bids`);
      const bids = await response.json();
      this.bidView.render(bids);
    } catch (error) {
      console.error(error);
      this.bidView.renderError('An error occurred while getting bids.');
    }
  }

  async createBid(listingId, amount) {
    try {
      const response = await fetch(`/api/listings/${listingId}/bids`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const bid = await response.json();

      if (response.ok) {
        this.bidView.render(bid);
      } else {
        this.bidView.renderError(bid.message);
      }
    } catch (error) {
      console.error(error);
      this.bidView.renderError('An error occurred while creating bid.');
    }
  }
}

export default BidController;
