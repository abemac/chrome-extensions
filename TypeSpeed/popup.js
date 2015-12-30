function doStuff() {
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().wpm;
}
document.addEventListener('DOMContentLoaded',function(){doStuff();});
