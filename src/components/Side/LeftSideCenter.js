import React, {useState, useEffect} from 'react';
import SideCenter from "./SideCenter";
import './LeftSideCenter.css';

function LeftSideCenter() {
    const [name, setName] = useState('')

    // GET USERNAME FROM LOCAL STORAGE
    let getName = localStorage.getItem('username');
    useEffect(()=>{
       
        if (!getName) return;

        setName(getName);
    }, [getName])
    //RETRIEVE THE FIRST LETTER, AND MAKE UPPERCASE
    let single = name.charAt(0).toUpperCase();
    return (
        <div className="center">
            <hr />
            <h3>Your Shortcuts</h3>
            <SideCenter profileTitle={single} title={"Konga Flex"} />
            <SideCenter profileTitle={single} title={"Facebook Developer Circle: Lagos"} />
            <SideCenter profileTitle={single} title={"Developer Circles Nigeria: ReactJs"} />
            
        </div>
    )
}

export default LeftSideCenter
