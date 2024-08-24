chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: 'slideshow.html',
    type: 'popup',
    width: 800,
    height: 600
  });
});
