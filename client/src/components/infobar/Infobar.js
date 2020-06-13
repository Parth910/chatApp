import React from 'react';
import './infobar.css';
import onlineIcon  from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png'

const Infobar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="onlineimage"/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer" >
        <a href="/" ><img src={closeIcon} alt="closeimage" /></a>

        </div>

    </div>
)

export default Infobar;