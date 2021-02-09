import React, {useState} from 'react';
import './ImgFeed.css';

function ImgFeed(props) {
    const [scale, setScale] = useState("");
    return (
        <div className="imgFeed" >
            <div className="big_img" style={{transform: `${scale.length > 0 && scale}`}}
                onMouseOver={()=>{setScale("scale(1.1")}} 
                onMouseLeave={()=>{setScale("scale(1)")}} >

                <img src={props.bgImg} alt="dd" />
            </div>
            
            <div className="small_img">
                <img src={props.roundImg} alt="yye" />
            </div>
            <div className="img-name">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default ImgFeed
