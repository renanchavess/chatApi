const app = require('./app');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const messages = [];

io.on('connect', (socket) => {
  socket.emit('previousMessages', messages);

  socket.on('sendMessage', (data) => {
    messages.push(data);
    socket.broadcast.emit('recivedMessage', data);
  });
});
server.listen(process.env.PORT || 3000);
