let scrollInterval;
let isScrolling = false;

// Listen for a click on the extension icon
chrome.action.onClicked.addListener((tab) => {
    // Execute a script in the current tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleAutoScroll
    });
  });
  
  function toggleAutoScroll()
  {
    if(window,isScrolling)
    {
        stopSrcolling();
    } 
    else
    {
        startScrolling();
    }
  }


  function startScrolling()
  {
    if(!window.scrollInterval)
    {
        window.isScrolling = true;
        window.scrollInterval = setInterval(() => {
            window.scroll(0,100); //scroll 100 pixls every 100ms
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                clearInterval(window.scrollInterval); // Stop scrolling when the bottom of the page is reached
                window.scrollInterval = null;
                window.isScrolling = false;
            }
        }, 100);
    }
  }

  function stopSrcolling()
  {
    if (window.scrollInterval)
    {
        clearInterval(window.scrollInterval);
        window.scrollInterval = null;
        window.isScrolling = false;
    }
  }