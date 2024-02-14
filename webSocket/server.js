let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//on= j'écoute
io.on('connection', function (socket){
    console.log('a user is connected');
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    })
    socket.on('chat message', function(msg){
        console.log('message reçu : ' + msg);
        io.emit('chat message', msg);
    })
})

http.listen(3000, function(){
    console.log('!!!! server listening on port:3000 !!!!');
})