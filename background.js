chrome.tabs.onUpdated.addListener(function(tabId,changeInfo, tab) {
  chrome.tabs.executeScript(tab.id,{code:"document.title = 'Twitter'"});
});
