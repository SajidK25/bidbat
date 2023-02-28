class BidView {
  constructor(container) {
    this.container = container;
  }

  render(bids) {
    let html = '';
    bids.forEach((bid) => {
      html += `
        <div class="bid">
          <p>Amount: ${bid.amount}</p>
          <p>Bidder: ${bid.bidder}</p>
        </div>
      `;
    });
    this.container.innerHTML = html;
  }
}

export default BidView;
