<<<<<<< HEAD
function test() {
=======
function doStuff() {
>>>>>>> a93a60a6fb0a4983e2ac282c725f8c483378e027
	chrome.extension.getBackgroundPage().count++;
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',test());
=======
document.addEventListener('DOMContentLoaded',function(){doStuff();});
>>>>>>> a93a60a6fb0a4983e2ac282c725f8c483378e027
