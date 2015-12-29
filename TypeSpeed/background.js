var count=0;
window.onkeyup = function(e){

  var key = e.keyCode? e.keyCode:e.which;
  count++;
  document.getElementById("numkeys").innerHTML(count);

}
