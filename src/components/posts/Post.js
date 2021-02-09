import {faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {connect} from 'react-redux';
import './Post.css';
import HumanTime from 'react-human-time';


function Post(props) {
    const updateLike = ()=>{
        //SEND DISPATCH TO INCREASE LIKE COUNT
        props.dispatch({type:"ADDLIKE", payload: props.id})
    }

    const updateShare = ()=>{
        //SEND DISPATCH TO INCREASE SHARE COUNT
        props.dispatch({type:"ADDSHARE", payload: props.id})
    }

    return (
        <div className="post box">
            <div className="post__inner">

           
                <div className="user_container">
                <div className="user_img">
                    <span className="profile_photo"><p>{props.userImg}</p></span>
                    </div>
                
                    
                    <div className="post_top">
                        <p>{props.userName}</p>
                        <p className="time">{<HumanTime time={props.time} /> }</p>
                    </div>
                </div>
                
                <div className="user_desc">
                    <p className="user_text">{props.postText}</p>
                </div>
            </div>
            {props.postImg !== '' &&<div className="post_img">
                <img src={props.postImg} alt="post_img"/>
            </div>
            }
            <div className="post_bottom">
                <div className="updates">
                   {props.likes > 0 ?
                    <p><span><FontAwesomeIcon icon={faThumbsUp} /></span>{props.likes}</p>
                    :
                        ''
                   }
                    {props.shares > 0 ?
                      <p className="share_update">{props.shares} Share</p>
                    :
                        ''
                   }
                </div>
                 
                <hr/>
                <div className="bottom_inner">
                    <p className="user_like" onClick={updateLike}>Like</p>
                    <p className="user_comment">Comment</p>
                    <p className="user_share" onClick={updateShare}>Share</p>
                </div>
            </div>
           
        </div>
    )
    
}

// TO SHOW LIKES, AND SHARE DATA
const mapStateToProps = (state) => {
    return {counts:state}
}

export default connect(mapStateToProps) (Post);
