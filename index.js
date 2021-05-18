var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on("start",(startingCoOrdinates) => {
        socket.broadcast.emit("start",startingCoOrdinates)
    })
    socket.on('draw', (cordinatesToDrawLine) => {
        console.log('corordinates are in the server.');
        socket.broadcast.emit('draw',cordinatesToDrawLine);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
});