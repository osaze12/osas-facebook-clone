import React, { useState } from 'react';
import './Main.css';
import Side from './Side/Side';
import Right from './right/Right';
import Feed from './feed/Feed';

import smiley from './img/smiley.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

function Main() {
    const [cancel, setCancel] = useState(false);
    const[blur, setBlue] = useState('blur(3px)');
    
    const style={
        filter: blur,
    }
    const cancelBlur =()=>{
        setCancel(true);
        setBlue('');
    }
    return (      
        <div className="main-container">
            <div className="main" style={style}>
                <Side />
                <Feed />
                <Right />
            </div>

            { cancel === false && <div className="Modal">
                <span className="modal__cancel" onClick={cancelBlur}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="modal-inner">
                    <div className="modal__img">
                        <img src={smiley} alt="creator_img" />
                    </div>
                    <div className="modal__text">
                        <h1>Hello, I'm a React Js front-end Developer</h1>
                        <p>And I am available for Gigs,
                        you can reach out to me through my email, <a href="mailto:osazeagbi@gmail.com">osazeagbi@gmail.com</a>,<br/>
                        I'd love to hear from you.</p>
                    </div>
                </div>
            </div>}
        </div>    
    )
}

export default Main
