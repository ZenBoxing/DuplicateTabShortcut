chrome.commands.onCommand.addListener((command) => 
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id; 
    

        chrome.tabs.duplicate(activeTabId, () => {});
        });  
});

