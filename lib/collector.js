// Generated by CoffeeScript 1.6.3
var collection;

collection = [];

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  collection.push.apply(collection, message.list);
  console.log(collection.length);
  chrome.runtime.sendMessage('mamahlbpokgohjdaikmmkceeoihmnadi',{data:message.list},function(response) {
  	//console.log(response);
  	//console.log('return')
  });
  return sendResponse({
    say: 'got it'
  });
});

/*
//@ sourceMappingURL=collector.map
*/
