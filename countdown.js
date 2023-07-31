// script.js

// Get references to the button and countdown element
const startButton = document.getElementById('countdownbtn');
const countdownElement = document.getElementById('countdown');
const audioPlayer = document.getElementById('stammer');

// Function to start the countdown
function startCountdown() {
  let count = 5;
  countdownElement.textContent = count;

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
    count--;
    countdownElement.textContent = count;

    // If the countdown reaches 0, stop the interval
    if (count === 0) {
      clearInterval(countdownInterval);
      window.location.href = "file:///C:/Users/Cilli/OneDrive/Documents/Abacus%20page/index.html#music";
      stammer.play();
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Add a click event listener to the button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
