var WebSocketServer = require('ws').Server;

var WebsocketServer = (function(){
	var websocket;
  var score = { left: 0, right: 0 };

	var on_message = function(message, ws){
    if(message == "RESET"){
      score = { left: 0, right: 0 };
    } else {
      var data = JSON.parse(message);
      score[data.owner] = score[data.owner] + parseInt(data.score);
    }

    for(var i in websocket.clients){
      websocket.clients[i].send(JSON.stringify(score));
    }
	}
	
	var on_connect = function(ws){
    ws.send(JSON.stringify(score));
		ws.on('message', function(message){
			on_message(message, ws);
		});
	}

  var _start = function(port, success_callback){
    try{
  		websocket = new WebSocketServer({port: port});
  		websocket.on('connection', on_connect);
    }catch(e){
      console.log(e)
    }
  }

  return {
    start: function(port, success_callback){
      _start(port, success_callback);
    }
  }
})();

module.exports = WebsocketServer;