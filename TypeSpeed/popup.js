function doStuff() {
<<<<<<< HEAD
  chrome.extension.getBackgroundPage().count++;
=======
>>>>>>> 1663c2908ddb248335e2c2fc07dd2048834e1df3
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
