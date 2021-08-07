import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './Messages.css';
const Messages = ({ messages, name }) => (

    <ScrollToBottom>
        {messages.map((message, i) => <dive key={i}> <Message message={message} name={name} /> </dive>)}
    </ScrollToBottom>

)



export default Messages;
