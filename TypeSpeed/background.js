
var count=0;
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if(request.greeting="keyPressed"){
      count++;
    }
  }
);


function countUp(){count++;}
