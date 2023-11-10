// Subscriber B
var mqtt = require("mqtt");
var subscriberB = mqtt.connect("mqtt://localhost:1200");

var tempTopic = "home/+/temp";

subscriberB.on("connect", () => {
  console.log("Subscriber B is connected to Broker");
  subscriberB.subscribe(tempTopic);
});
subscriberB.on("message", (topic, message) => {
  console.log("Recieve: ", topic, message.toString());
});
