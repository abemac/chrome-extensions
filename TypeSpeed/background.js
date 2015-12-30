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
<<<<<<< HEAD
chrome.input.ime.onKeyEvent.addListener(
  function(engineID,keyData){
    count++;
  };
)
>>>>>>> 32c10624145ee52e6d83218d4a3d9e226b0c8d42
=======
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if(request.greeting="keyPressed"){
      count++;
    }
  }
);


function countUp(){count++;}
>>>>>>> 1663c2908ddb248335e2c2fc07dd2048834e1df3
