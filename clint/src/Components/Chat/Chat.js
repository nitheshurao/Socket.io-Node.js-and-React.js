import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

import './chat.css';
import InfoBar from '../InfoBar/InfoBar';
import IInput from '../Input/IInput';
import Messages from '../Messages/Messages';

let socket;
const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endpoint = 'localhost:5000';
    useEffect(() => {
        const { name } = queryString.parse(location.search);
        const { room } = queryString.parse(location.search);

        console.log(name, room);

        socket = io(endpoint);
        setName(name);

        setRoom(room);

        console.log(socket)
        socket.emit('join', { name, room }, () => {
            // alert(error);

        })

        return () => {
            socket.io('disconnect');
            socket.off();

        }
    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
        });

    }, []);

    const sendMessage = (value) => {
        value.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContacner">
            <div className="conatainer">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                {/* <IInput message={message} setMessage={setMessage} sendMessage={setMessage} /> */}
                {/* 
 */}
                <form className="form">
                    <input
                        className="input"
                        type="text"
                        placeholder="Type a message..."
                        value={message}
                        onChange={({ target: { value } }) => setMessage(value)}
                        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                    />
                    <button className="sendbutton" onClick={e => sendMessage(e)}>Send</button>
                </form>
                {/*  */}
            </div>
        </div>
    )
}

export default Chat
