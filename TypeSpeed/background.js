<<<<<<< HEAD
var count=24;
// window.addEventListener('keydown',function(event){
//     count++;
//     count=count+1;
// },false);

function move(keys) {
	if (keys.keyCode == 97) {
	chrome.extension.getBackgroundPage().count
	document.getElementById("numkeys").innerHTML=chrome.extension.getBackgroundPage().count;
	}
}
=======
var count=0;
chrome.input.ime.onKeyEvent.addListener(
  function(engineID,keyData){
    count++;
  };
)
>>>>>>> 32c10624145ee52e6d83218d4a3d9e226b0c8d42
