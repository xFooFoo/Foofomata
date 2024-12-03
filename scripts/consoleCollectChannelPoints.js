/*
This script can be run on the console on twitch streams to attempt to collect the free bonus channel points every 15 seconds
<button aria-label="Claim Bonus" class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ljgEdo fEpwrH"><div class="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr"><div data-a-target="tw-core-button-label-text" class="Layout-sc-1xcs6mc-0 bFxzAY"><div class="Layout-sc-1xcs6mc-0 cVmNmw claimable-bonus__icon"><div class="ScFigure-sc-wkgzod-0 caxXaW tw-svg"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M11 11H9v2h2v-2Z"></path><path fill-rule="evenodd" d="M2 6v11h16V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm10-1H8v2h4V5Zm2 0v2h2V6a1 1 0 0 0-1-1h-1ZM4 9v6h12V9H4Zm1-4h1v2H4V6a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg></div></div></div></div></button>
class="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr"
*/

function collectChannelPoints() {
	const button = document.querySelector('button[aria-label="Claim Bonus"]');

	// Perform an action, e.g., click the button
	if (button) {
	    button.click();
	    console.log(`Twitch Bonus Button Clicked: ${new Date(Date.now())}`);
	} else {
	    console.log(`Twitch Bonus Button Not found: ${new Date(Date.now())}`);
	    // Prevents recursion by exiting the function if the button isn't found
	    return;
	}
}

function clearChannelPointsInterval() {
  if (collectChannelPointsId) {
    clearInterval(collectChannelPointsId);
    collectChannelPointsId = null;
    console.log('Channel Points Interval Cleared');
  }
}

var collectChannelPointsId = setInterval(collectChannelPoints, 15000); //every 15s

// if you want to stop the interval without refreshing the webpage
// clearInterval(collectChannelPointsId);

