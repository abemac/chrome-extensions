function test() {
	chrome.extension.getBackgroundPage().count++;
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
}

document.addEventListener('DOMContentLoaded',test());