import React, {useState, useEffect} from 'react';
import './Posts.css';
import Post from './Post.js';
import {connect} from 'react-redux';

function Posts(props) {
    const [fbPosts, setFbPosts] = useState([]);
    const [name, setName] = useState('')

    // GET USERNAME FROM LOCAL STORAGE
    let getName = localStorage.getItem('username');
    useEffect(()=>{
        if (!getName) return;
        setName(getName);
    }, [getName])
    
    //RETRIEVE THE FIRST LETTER, AND MAKE UPPERCASE
    let single = name.charAt(0).toUpperCase();


    //STORE POST INFO WHEN EVER THERE'S CHANGES TO REDUX STORE
    let getPosts = props.fbPostsData;
    useEffect(()=>{
        
        if (getPosts){
             if (getPosts.length > 0){
                 //SORT BY THE NEWEST POST
                let sortedPosts = getPosts.sort((a, b) => b.id - a.id)
                setFbPosts(sortedPosts);
             }
        }
    }, [getPosts])

    const userPosts =  fbPosts  && fbPosts.map((data)=>{
            return <Post
                userImg={single}
                key={data.id}
                id={data.id}
                userName={name}
                time={data.createdAt === null ? '0:0:0' : data.createdAt.props.time}
                postText={typeof data.postText !== 'undefined' ? data.postText : ''}
                postImg={typeof data.postImg !== 'undefined' ? data.postImg : '' }
                likes={typeof data.like !== 'undefined' ? data.like : 0}
                shares={typeof data.share !== 'undefined'  ? data.share : 0}
            />
    })
    return (
        <div className="posts">
            {userPosts ? userPosts : "There's an Error displaying posts"}         
        </div>
    )
}
const mapStateToProps = (state) => ({
    fbPostsData:state.posts
})
export default connect(mapStateToProps)(Posts)
