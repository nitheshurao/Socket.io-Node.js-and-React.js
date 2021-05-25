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

const  {adduser, removeuser,getuser,getuserinroom} =require ('./user.js');

io.on('connection', (socket) => {
    console.log('we have a new connection!!!');

    socket.on('join', ({ name, room }, callback) => {
     
        const {error,users} =adduser({id:socket.id, name, room});

        if(error) return callback(error);

socket.emit('message',{users:'admin', text: `${users.name},welcome to the room ${users.room}`});
socket.broadcast.to(users.room).emit('message', {users:'admin',text:`${users.name}, has joined !`});


        socket.join(users.room);

        callback();
       
    })
socket.on('sendMessage', (message,callback)=>{
const users =getuser(socket.id);

io.to(users.room).emit('message',{users:users.name,text:message});

callback();
})

    socket.on('disconnect', () => {
        console.log('user had left!!');
    })
});



//

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));