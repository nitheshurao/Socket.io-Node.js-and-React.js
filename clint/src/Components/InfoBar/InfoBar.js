import React from 'react';
import './InfoBra.css';
import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';


const InfoBar = ({ room }) => (
    <div className="InfoBar">
        <div className="lestInnerConatainer">
            <img className="onlineIcon" src={onlineIcon} alt="onlie image" />
            <h3> {room}</h3>
        </div>
        <div className="RightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image" />* </a>
        </div>

    </div>

)

export default InfoBar;