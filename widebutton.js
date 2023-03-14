const elements = document.getElementsByClassName('nng_btn_control wide');
const wideScreenElement = elements[0];

// wideScreenElement.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageWatchChat,
//     });
// });

wideScreenElement.addEventListener("click", setPageWatchChat);