window.onkeydown=function(e){
    if(e.keyCode==32){
      chrome.runtime.sendMessage({greeting:"spacePressed"},function(response){
        console.log(response.farewell);
      });
    }else{
    chrome.runtime.sendMessage({greeting:"keyPressed"},function(response){
      console.log(response.farewell);
    });
  }
}
