const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3333 });

wss.on('connection', function connection(ws) {
  console.log('there is a connection')
  ws.on('message', function incoming(message) {
    console.log('received:', message);

    ws.send('response')
  });

  ws.send('something')
});
console.log('server is listenning')
