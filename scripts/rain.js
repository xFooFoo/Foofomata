/*
This script can be run on the console on CSGO500 to attempt to collect the rain every 15 seconds
*/

function collectRain() {
	const buttons = document.querySelectorAll('button.base-button.is-pink'); // Select all button elements
	const targetButton = Array.from(buttons).find(button => button.textContent.trim() === 'Join Rain');

	if (targetButton) {
	    targetButton.click();
	    console.log(`Rain Button Clicked: ${new Date(Date.now())}`);
	} else {
	    console.log(`Rain Button Not Found: ${new Date(Date.now())}`);
	    // Prevents recursion by exiting the function if the button isn't found
	    return;
	}
}

var collectRainId = setInterval(collectRain, 15000); //every 15s

// if you want to stop the interval without refreshing the webpage
// clearInterval(collectRainId);