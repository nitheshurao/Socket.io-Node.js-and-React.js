const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000


// importing router

const router = require('./router');
/////
const app = express();

const server = http.createServer(app);
const io = socketio(server);
//intergrate socket.io

const { adduser, removeuser, getuser, getuserinroom } = require('./user.js');

io.on('connection', (socket) => {
    console.log('we have a new connection!!!');

    socket.on('join', ({ name, room }, callback) => {

        const { error, user } = adduser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name},welcome to the room ${user.room} ` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined !` });


        socket.join(user.room);

        callback();

    })
    socket.on('sendMessage', (message, callback) => {
        const user = getuser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('user had left!!');
    })
});



//

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));