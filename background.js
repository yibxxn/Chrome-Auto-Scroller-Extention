// Listen for a click on the extension icon
chrome.action.onClicked.addListener((tab) => {
    // Execute a script in the current tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrollToBottom
    });
  });

  //scroll function that scrolls to tthe bottom
  function scrollToBottom() {
    var timedelay = 800;
    var scrollId;
    var height = 0;
    var minScrollHeight = 100;
    scrollId = setInterval(function () {
        if (height <= document.body.scrollHeight) {
            window.scrollBy(0, minScrollHeight);
        }
        else {
            clearInterval(scrollId);
        }
        height += minScrollHeight;
    }, timedelay);           
}
