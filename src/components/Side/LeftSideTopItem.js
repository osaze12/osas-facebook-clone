import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './LeftSideTopItem.css';

function LeftSideTopItem({icon, title, profileTitle, classname}) {
    return (
        <div className={classname ?  `item ${classname}` : `item` }>
            <a href="www.google.com/search?q=facebook+profile">
                <div className="sideTop_first">{icon 
                ? 
                    <FontAwesomeIcon icon={icon} />
                 : 
                    profileTitle &&  
                    <span className="profile_photo">
                        <p>{profileTitle}</p>
                    </span>}
                </div> 
                <p>{title}</p>
            </a>
        </div>
    )
}

export default LeftSideTopItem
