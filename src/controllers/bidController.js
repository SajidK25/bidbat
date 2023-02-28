import BidView from '../views/bidView.js';

class BidController {
  constructor() {
    this.bidView = new BidView(document.querySelector('#bid-container'));
  }

  async getBids() {
    try {
      const response = await fetch('/api/v1/auction/bids');
      const bids = await response.json();
      this.bidView.render(bids);
    } catch (error) {
      console.error(error);
    }
  }

  async createBid(bid) {
    try {
      const response = await fetch('/api/v1/auction/bids', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bid),
      });
      const newBid = await response.json();
      console.log('Bid created:', newBid);
    } catch (error) {
      console.error(error);
    }
  }

  async updateBid(id, bid) {
    try {
      const response = await fetch(`/api/v1/auction/bids/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bid),
      });
      const updatedBid = await response.json();
      console.log('Bid updated:', updatedBid);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteBid(id) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`/api/v1/auction/bids/${id}`, {
        method: 'DELETE',
      });
      console.log('Bid deleted:', id);
    } catch (error) {
      console.error(error);
    }
  }
}

export default BidController;
