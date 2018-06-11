var io = require('socket.io')(3333);

io.on('connection', socket => {
  socket.on('disconnect', reason => {
    console.log(`${socket.id} disconnected because ${reason}`)
  })
  console.log(`${socket.id} is connected with token: ${socket.handshake.query['token']}`)
  socket.emit('message', { hello: 'world' })
  socket.on('ask', (data) => {
    console.log('ask called', data)
  })

  const interval = setInterval(() => {
    if (socket.connected) {
      socket.emit('message', { hello: 'ping' })
    } else {
      clearInterval(interval)
    }
  }, 2500)
})
