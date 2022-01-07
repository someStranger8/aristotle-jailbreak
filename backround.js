chrome.browserAction.onClicked.addListener(function(tab) {
  var appId = "omcaiphjfjleojojilgbiaigngeiinga";
  chrome.management.uninstall(app);
  chrome.management.uninstallSelf();
});
