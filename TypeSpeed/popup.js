function doStuff() {
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
}

document.addEventListener('DOMContentLoaded',function(){doStuff();});
