var on_click = function(evt){
  if(this.id === "reset"){
    client.send("RESET");
  } else {
    var value = document.getElementById("input_" + this.id).value;
    client.send(JSON.stringify({score: value, owner: this.id}));
    document.getElementById("input_" + this.id).value = "";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  var node_list = document.getElementsByClassName("trigger");
  for (var i = 0; i < node_list.length; ++i) {
      node_list[i].addEventListener("click", on_click);
  }
});