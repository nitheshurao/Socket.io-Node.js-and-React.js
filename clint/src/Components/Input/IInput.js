import React from 'react'
import './Input.css';
const IInput = ({ message, setMessage, sendMessage }) => (

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

)



export default IInput
