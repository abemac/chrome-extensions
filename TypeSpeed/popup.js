function doStuff() {
  chrome.extension.getBackgroundPage().count++;
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
}

function move(keys) {
	if (keys.keyCode == 97) {
	chrome.extension.getBackgroundPage().count
	document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
	}
}

document.addEventListener('DOMContentLoaded',function(){doStuff();});
document.addEventListener('DOMContentLoaded',function(){test(event);});
