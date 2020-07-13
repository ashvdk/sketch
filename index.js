var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("start",(startingCoOrdinates) => {
        socket.broadcast.emit("start",startingCoOrdinates)
    })
    // socket.on('startCoOrdinates', (cood) => {
    //     socket.broadcast.emit('startCoOrdinates',cood);
    // });
    socket.on('draw', (cordinatesToDrawLine) => {
        //console.log(cordinatesToDrawLine)
        socket.broadcast.emit('draw',cordinatesToDrawLine);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});