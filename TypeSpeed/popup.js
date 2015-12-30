function doStuff() {
	chrome.extension.getBackgroundPage().count++;
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
}

document.addEventListener('DOMContentLoaded',doStuff());
