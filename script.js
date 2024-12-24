//your code here

// function to update the clock hands based on the current time

function updateClock() {
	// get the current time
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getminutes();
	const hours = now.gethours();

	// get teh clock hands
	const hourHand = document.querySelector('.hour-hand');
	const minuteHand = document.querySelector('.min-hand');
	const secondHand = document.querySelector('.second-hand');

	// calculate the angles for each hand
	const secondAngle = (seconds / 60) * 360;
	// adjust minute hand for seconds
	const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
	// adjust hour hand for minutes
	const hourAngle = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

	// apply the rotation angles to the hands
	secondHand.style.transform = `rotate(${secondAngle}deg)`;
	minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
	hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

// call the updateClock function every second(1000ms)

setInterval(updateClock, 1000);

// initialize the clock immediately
updateClock();
