const wideScreenElement = document.querySelector('.nng_btn_control.wide');

wideScreenElement.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageWatchChat,
    });
});