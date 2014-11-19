var client;

var on_open = function(evt){
  console.log("connected!");
}

var on_close = function(){
  console.log("Connection closed!");
}

var on_message = function(evt){
  var data = JSON.parse(evt.data);
  ["left", "right"].forEach(function(item, index, array){
    document.getElementById("text_" + item).textContent = data[item];
  });
}

document.addEventListener("DOMContentLoaded", function(){
  try {
    client = new WebSocket("ws://localhost:8080");
    client.onopen = on_open;
    client.onmessage = on_message;
    client.onclose = on_close;
  } catch (e){
    console.log(e);
  }
});