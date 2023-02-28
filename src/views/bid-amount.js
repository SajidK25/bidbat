// Define the end time (in milliseconds)
const endTime = new Date('2023-03-01T00:00:00.000Z').getTime();

// Get the product cards
const productCards = document.querySelectorAll('.product-card');

// Loop through each product card
productCards.forEach(productCard => {
  // Define the bid amount
  let bidAmount = 0;

  // Define the bid interval (in milliseconds)
  const bidInterval = 10000;

  // Get the bid amount and remaining time elements
  const bidAmountElement = productCard.querySelector('.bid-amount');
  const remainingTimeElement = productCard.querySelector('.remaining-time');

  // Update the bid amount and remaining time
  const updateBidAndTime = () => {
    // Update the bid amount
    bidAmount += 10;
    bidAmountElement.textContent = bidAmount;

    // Calculate the remaining time
    const remainingTime = endTime - Date.now();

    // If the remaining time is less than or equal to 0,
    if (remainingTime <= 0) {
      // Set the remaining time to 0 and disable the bid button
      remainingTimeElement.textContent = '0:00:00';
      productCard.querySelector('.bid-button').disabled = true;
    } else {
      // Calculate the hours, minutes, and seconds
      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Format the time string
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      // Update the remaining time
      remainingTimeElement.textContent = timeString;
    }
  };

  // Update the bid amount and remaining time immediately
  updateBidAndTime();

  // Set the bid interval
  setInterval(updateBidAndTime, bidInterval);
});

// Define the placeBid function
function placeBid() {
  alert('You placed a bid!');
}
