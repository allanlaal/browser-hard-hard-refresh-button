chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, {code: 'localStorage.clear();'});
  chrome.browsingData.remove({
    "origins": [tab.url]
  }, {
    "cache": true,
    "cookies": true,
    "localStorage": true,
    "sessionStorage": true
  }, () => {
    chrome.tabs.reload(tab.id);
  });
});
