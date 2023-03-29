chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "translate",
      title: "Traduzir no Google Tradutor",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "translate") {
      const text = info.selectionText;
      const url = `https://translate.google.com/?text=${encodeURIComponent(text)}`;
      chrome.tabs.create({ url });
    }
  });