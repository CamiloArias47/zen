const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app)
const io = socketio.listen(server)

//database
require('./database');

//setings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json())

//static files, muestra el index.html
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api/games', require('./routes/games'))
app.use('/api/question', require('./routes/questions'))
app.use('*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });


//start socket
require('./socket')(io);

//start server
server.listen(app.get('port'), ()=>{
    console.log(`[server] running on port ${app.get('port')}`)
})