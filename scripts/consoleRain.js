<<<<<<< HEAD
/*
This script can be run on the console on CSGO500 to attempt to collect the rain every 15 seconds
*/

function collectRain() {
	const buttons = document.querySelectorAll('button.base-button.is-pink'); // Select all button elements
	const targetButton = Array.from(buttons).find(
		button => {
			const text = button.textContent.trim();
			return text === 'Join Rain' || text === 'Join Snow'; // Explicit return
		}
	);

	if (targetButton) {
	    targetButton.click();
	    console.log(`Rain Button Clicked: ${new Date(Date.now())}`);
	} else {
	    console.log(`Rain Button Not Found: ${new Date(Date.now())}`);
	    // Prevents recursion by exiting the function if the button isn't found
	    return;
	}
}

function clearRainInterval() {
  if (collectRainId) {
    clearInterval(collectRainId);
    collectRainId = null;
    console.log('Rain Interval Cleared');
  }
}

var collectRainId = setInterval(collectRain, 15000); //every 15s

// if you want to stop the interval without refreshing the webpage
=======
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

function clearRainInterval() {
  if (collectRainId) {
    clearInterval(collectRainId);
    collectRainId = null;
    console.log('Rain Interval Cleared');
  }
}

var collectRainId = setInterval(collectRain, 15000); //every 15s

// if you want to stop the interval without refreshing the webpage
>>>>>>> a63930ca8bb0b2badde3a7309aa62581ddbf0893
// clearInterval(collectRainId);