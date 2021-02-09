import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../advert/AdvertData.css';

function AdvertData(props) {
    return (
        <div className="advert__inner">
            <div className="logo">
                <FontAwesomeIcon icon={props.fbLogo} />
            </div>
            <div className="advert__main">
                <div className="advert__center">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <h1>{props.heading}</h1>
                <p>{props.desc}</p>
                <button ><a href={props.url}>{props.btnName}</a></button>
            </div>     
        </div>
    )
}

export default AdvertData
