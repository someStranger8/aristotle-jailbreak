chrome.browserAction.onClicked.addListener(function(tab) {
  var app = prompt('enter extention id:');
  chrome.management.uninstall(app);
  chrome.management.uninstallSelf();
});
