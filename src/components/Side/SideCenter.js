import React from 'react';
import './SideCenter.css';


function SideCenter({profileTitle, title}) {
    return (
        <div className="sideCenter">
            {/* profile Title */}
            <span className="profile_photo"><p>{profileTitle}</p></span>
            <a href="www.google.com/search?q=facebook+shortcut"><p>{title}</p></a>
        </div>
    )
}

export default SideCenter
