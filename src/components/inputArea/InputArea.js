// import { } from '@fortawesome/free-brands-svg-icons';
import { faLaughSquint, faPhotoVideo, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import '../inputArea/InputArea.css';
import HumanTime from 'react-human-time';



function InputArea(props) {
    const [vidUploadTrue, setVidUploadTrue] = useState(false);

    const [name, setName] = useState('');
    const [postText, setPostText] = useState("");
    const [img, setImg] = useState(null);

    const handleFileChange = (e)=>{
         setImg(e.target.files[0]);
         setVidUploadTrue(true);
    }
    // SEND POST DATA
    const handlePostSubmit = (e)=>{
        e.preventDefault();
        
        let sendData = {
            id: parseInt(props.id.posts.length + 1), 
            postImg:  img ? URL.createObjectURL(img) : '' ,
            postText: postText,
            like:  0,
            share: 0,
            createdAt:<HumanTime time={new Date().getTime()} />,
        }
        //SEND POST DATA TO REDUX
        props.dispatch({type:"POSTDATA", payload:sendData});
        setPostText("");
     
        setImg(null);
    
        setVidUploadTrue(false);
    }

    // GET USERNAME FROM LOCAL STORAGE
    let getName = localStorage.getItem('username');
    useEffect(()=>{
        if (!getName) return;

        setName(getName);
    }, [getName]);
    //RETRIEVE THE FIRST LETTER, AND MAKE UPPERCASE
    let single = name.charAt(0).toUpperCase();

    return (
        <div className="inputArea box">
            <div className="inputArea__top">
                <div className="img">
                    <span className="profile_photo"><p>{single}</p></span>
                </div>
                
                <form onSubmit={handlePostSubmit}>
                    <input type="text" 
                        name="text" 
                        placeholder={`   What's on your mind, `}
                        value={postText}
                        onChange={(e)=> setPostText(e.target.value)}/>
                </form>
            </div>
            <hr/>
            <div className="inputArea__bottom">
                <div className="liveVideo">
                    <p><FontAwesomeIcon icon={faVideo} /></p>
                    <p>Live Video</p>
                </div>
                <div className="photoVideo">
                
                <label>
                    <span className= {vidUploadTrue ? "vidUploadNoti" : ''}></span>
                    <FontAwesomeIcon icon={faPhotoVideo} />
                    <p>Photo/Video</p>
                    <input type="file" onChange={handleFileChange}/>
                </label>
                    
                    
                </div>
                <div className="feelingActivity">
                   <p><FontAwesomeIcon icon={faLaughSquint} /></p> 
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>({
  
    id: state
})
export default connect(mapStateToProps) (InputArea);
