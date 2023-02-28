// Set the date and time for the end of the auction (in this case, one hour from now)
var endDate = new Date();
endDate.setHours(endDate.getHours() + 1);

// Get the countdown element
var countdown = document.getElementById('countdown');

// Update the countdown every second
var countdownInterval = setInterval(function () {
  // Calculate the time remaining
  var timeRemaining = endDate.getTime() - new Date().getTime();

  // If the auction has ended, clear the interval and display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdown.innerHTML = 'Auction has ended';
  } else {
    // Convert the time remaining to hours, minutes, and seconds
    var hours = Math.floor(timeRemaining / 1000 / 60 / 60);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    var seconds = Math.floor((timeRemaining / 1000) % 60);

    // Format the time remaining as a string and update the countdown element
    var timeString = hours + 'h ' + minutes + 'm ' + seconds + 's';
    countdown.innerHTML = timeString;
  }
}, 1000);
