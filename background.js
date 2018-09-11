chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          /**
           * Add URL filtering here
           * eg: pageUrl: {hostEquals: 'developer.chrome.com'},
           */
          pageUrl: {},
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});