//your code here

// Function to update the clock hands based on the current time
function updateClock() {
  // Get the current time
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Get the clock hands
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  // Calculate the angles for each hand
  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6; // Adjust minute hand for seconds
  const hourAngle = (hours % 12) / 12 * 360 + (minutes / 60) * 30; // Adjust hour hand for minutes

  // Apply the rotation angles to the hands
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

// Call the updateClock function every second (1000ms)
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
