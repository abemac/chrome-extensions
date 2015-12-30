window.onkeydown=function(e){
    chrome.runtime.sendMessage({greeting:"keyPressed"},function(response){
      console.log(response.farewell);
    });
}
