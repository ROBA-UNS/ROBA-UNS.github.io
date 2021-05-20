var mqtt;
var reconnectTimeout = 60;
var host = "192.168.43.35";
var port = 9001;

function onConnect(){
  message = new Paho.MQTT.Message(stringKode);
  message.destinationName = "roba_uns_" + host;
  mqtt.send(message);
}

function onFailure(message){
  console.log("Connection to Host Failed");
  setTimeout(MQTTconnect, reconnectTimeout);
}

function onMessageArrived(msg){
  out_msg = "Message received" + msg.payloadString + "<br>";
  out_msg = out_msg + "Message received topic" + msg.destinationName;
  console.log(out_msg);
}

function MQTTconnect(){
  console.log("connecting to "+host+" "+port);
  mqtt = new Paho.MQTT.Client(host, port, "clientjs");

  var options = {
    timeout: 10,
    onSuccess: onConnect,
    onFailure: onFailure,
  };

  mqtt.onMessageArrived = onMessageArrived

  mqtt.connect(options);
}