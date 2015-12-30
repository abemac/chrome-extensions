var count=0;
chrome.input.ime.onKeyEvent.addListener(
  function(engineID,keyData){
    count++;
  };
)
