import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

import './Message.css';
const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }
    return (
        isSentByCurrentUser

            ? (<div className="messagecontainer justifyEnd">
                <p className="sendText pr-10"> {trimmedName}</p>

                <div className="messageBox backgroudBlue">
                    <p className="messagesText colotwhite">
                        {text}
                    </p>
                </div>

            </div>

            ) : (

                <div className="messagecontainer justifyStart" >

                    <div className="sendText backgroundLight"  >
                        <p className="messagesText colorDark"> {text}</p>

                    </div>
                    <p className="sentText pr-10">{user}</p>
                </div>

            )
    )
}



export default Message;
