import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState(' ');

    return (
        <div className="JoinOuterConatainer">
            <div className="joinInnerContainer">
                <div className="heading">Join
                    <div><input placeholder="" className="joinInput" type="text" onChange={(e) => {
                        setName(e.target.value)

                    }} />enter  </div>
                    <div><input placeholder="" className="joinInput mt-20" type="text" onChange={(e) => {
                        setRoom(e.target.value)
                    }} /> </div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room={room}`} >
                        <button className="button mt-20" type="submit"> Sign In</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default Join;