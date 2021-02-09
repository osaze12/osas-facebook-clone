import React, { useEffect, useState } from 'react';
import LeftSideTopItem from './LeftSideTopItem';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
// import f from '../img/v.jpeg';
import {faStore, faUsers,faShieldVirus, faUserFriends, faAngleDown} from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';

function LeftSideTop() {
    const [name, setName] = useState('');
    // GET USERNAME FROM LOCAL STORAGE
    let getName = localStorage.getItem('username');
    useEffect(()=>{
        if (!getName) return;

        setName(getName);
    }, [getName])

    return (
        <div className="leftSideTop">
            <LeftSideTopItem profileTitle={name.charAt(0).toUpperCase()} title={name} />
            <LeftSideTopItem icon={faShieldVirus} title={"COVID-19 Information Center"} />
            <LeftSideTopItem icon={faUserFriends} title={"Friends"} />
            <LeftSideTopItem icon={faUsers} title={"Groups"} />
            <LeftSideTopItem icon={faStore} title={"Market Place"} />
            <LeftSideTopItem icon={faYoutube} title={"Watch"} />
            <LeftSideTopItem icon={faAngleDown} title={"See more"} classname={"round"} />
        </div>
    )
}

export default LeftSideTop;
