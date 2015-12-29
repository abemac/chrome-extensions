document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
});
