import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css';

let socket;
const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState(' ');

    const endpoint = 'localhost:5000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        console.log(name, room);

        socket = io(endpoint);
        setName(name);
        setRoom(room);
        console.log(socket)
        socket.emit('join', { name, room }, ({ error }) => {
            // alert(error);

        })

        return() =>{
socket.io('disconnect');
socket.off();

        }
    }, [endpoint, location.search]);
    return (
        <div>
            cha
        </div>
    )
}

export default Chat
