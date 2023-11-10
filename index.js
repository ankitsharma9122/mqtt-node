var mosca = require("mosca");

var settings = {
  port: 1200,
};

var broker = new mosca.Server(settings);

broker.on("ready", function () {
  console.log("Broker is ready!");
});

broker.on("published", function (packet) {
  var message = packet.payload.toString();
  console.log(message);
});
