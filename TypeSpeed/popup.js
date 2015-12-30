function doStuff() {
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().wpm;
}
document.addEventListener('DOMContentLoaded',function(){doStuff();});

function reset(){
	chrome.extension.getBackgroundPage().wpm=0;
	chrome.extension.getBackgroundPage().spaceCount=0;
	chrome.extension.getBackgroundPage().wordTyped=false;
	chrome.extension.getBackgroundPage().elapsedTime=0;
}
