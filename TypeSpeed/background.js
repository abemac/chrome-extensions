var wpm=0;
var spaceCount=0;
var wordTyped=false;
var lastTime=new Date();
var elapsedTime=0;
var bufferTime = 1000;

chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    var timeNow = new Date();
    if(timeNow-lastTime <bufferTime){
        elapsedTime+=timeNow-lastTime;
    }
    lastTime = timeNow;
    if(request.greeting=="keyPressed"){
      wordTyped=true;
    }
    else if (request.greeting=="spacePressed"){
      if(wordTyped){
        spaceCount++;
        wordTyped=false;
      }

    }

    if(elapsedTime==0){
      wpm=0;
    }else{
      wpm=spaceCount/(elapsedTime/60000);
    }
  }
);
