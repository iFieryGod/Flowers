const cors = require('cors')
const dotenv = require('dotenv/config')
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

dotenv

app.use(cors());
app.get('/', (req, res, next) => {
  res.send('Hello World')
  next()
})
 
io.on('connection', async (socket) => {
  console.log('hello log')
  socket.on('ping', (data) => {
    console.log('connected')
    socket.emit('newLocation', data);
  });
});

const port = process.env.PORT

http.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})