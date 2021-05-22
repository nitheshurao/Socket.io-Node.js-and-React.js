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

        console.log(name.room);
        
        socket = io(endpoint);

        console.log(socket)
        socket.emit()
    }, [endpoint, location.search]);
    return (
        <div>
            cha
        </div>
    )
}

export default Chat
