
document.addEventListener('DOMContentLoaded',function(){doStuff();});



function doStuff() {
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().wpm.toPrecision(4);
	document.getElementById("reset").onclick=function(){
		reset();
	};
}

function reset(){
	chrome.extension.getBackgroundPage().wpm=0;
	chrome.extension.getBackgroundPage().spaceCount=0;
	chrome.extension.getBackgroundPage().wordTyped=false;
	chrome.extension.getBackgroundPage().elapsedTime=0;
	document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().wpm.toPrecision(4);
}
