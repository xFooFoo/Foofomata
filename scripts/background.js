console.log("Service worker is starting...");

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const twitch = 'twitch.tv';
const cs500 = 'csgo500.com';

chrome.action.onClicked.addListener(async (tab) => {
  console.log("Extension clicked");
  console.log("Current tab URL:", tab.url);

  if (tab.url.includes(twitch) || tab.url.includes(cs500)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    console.log("Previous State:", prevState);
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
    console.log("Badge text set to:", nextState);

    if (nextState === "ON") {
        // Insert auto button-click scripts
        await chrome.scripting.executeScript({
          target : { tabId : tab.id},
          files : [ "scripts/rain.js" ],
        })/* .then(() => console.log("script injected")); */

        await chrome.scripting.executeScript({
          target : { tabId : tab.id},
          files : [ "scripts/collectChannelPoints.js" ],
        })
    } 
  }
});