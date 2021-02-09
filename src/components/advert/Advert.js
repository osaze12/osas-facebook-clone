import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import AdvertData from './AdvertData';
import {faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';



function Advert() {
    const [hide, setHide] = useState(false);
    return (
        hide === false 
            && 
            <div className="advert box"> 
                <div className="hide" onClick={()=>{setHide(true)}}><FontAwesomeIcon icon={faTimes} /></div>
                <AdvertData 
                    fbLogo={faFacebook} 
                    icon={faWhatsapp} 
                    heading={"Add a WhatsApp Button to Your Page"} 
                    desc={`Connect a
                    WhatsApp or WhatsApp Business account to Konga
                    Flex to make it easier for people to send you messages.`} 
                    url={"http://facebook.com/connect"} 
                    btnName={"Connect Account"}
                />
            </div>
    )
}

export default Advert
