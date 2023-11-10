<!-- https://medium.com/globant/mqtt-the-ultimate-ingredient-of-iot-e507ed77c35 -->

When there is a requirement to stream real time data like GPS and sensor data to cloud server, we have three main options to pick from MQTT, Websockets, GRPC the new guy from Google.

Websocket and MQTT diff=========>

1.Websockets maintain persistent connection. connection is not persistent in MQTT

2.Message distribution ===>One-to-many(MQTT) One-to-one(SOCKET)

3.MQTT brokers queue messages for all disconnected clients subscribed to a topic.
whileRaw WebSocket doesn't support message queuing.

MQTT is a lightweight messaging protocol designed for low-bandwidth networks and IoT devices, while Kafka is a distributed streaming platform that focuses on high-throughput, fault-tolerant, and scalable data streaming.

MQTT and Kafka diff==>
MQTT USE for pub/sub in purspose for reaching out differnt services while kafka uses for
easy data processing model.
MQTT is ideal for low-bandwidth networks and connecting a vast number of devices, while Kafka is perfect for large-scale applications requiring real-time storage of data and processing by third-party data applications.
