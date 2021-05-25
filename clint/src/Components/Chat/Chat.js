import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css';

let socket;
const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState(' ');
    const [message, setMessage] = useState();
    const [messages, setMessages] = useState([]);
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

        return () => {
            socket.io('disconnect');
            socket.off();

        }
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', (messgae) => {
            setMessages([...messages, messgae]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContacner">
            <div className="conatainer">
                <input value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
            </div>
        </div>
    )
}

export default Chat
