import React from 'react';
import '../feed/Feed.css';
import c from '../img/c.PNG';
import v from '../img/v.jpeg'
import sc from '../img/sc.png';
import ni from '../img/ni.jpg';
import F from '../img/f.png';
import ImgFeed from '../feed/ImgFeed';
import Advert from '../advert/Advert';
import InputArea from '../inputArea/InputArea';
import Posts from '../posts/Posts';

function Feed() {
    return (
        <div className="feed">
           <div className="feed-inner">
               <div className="imgContainer">
                   <ImgFeed bgImg={c} roundImg={c} name={"Itz Mhiz Faith"} />
               
                    <ImgFeed bgImg={v} roundImg={v} name={"Blessing Agbi"} />
                    <ImgFeed bgImg={sc} roundImg={sc} name={"Gift Agbi"} />
                    <ImgFeed bgImg={ni} roundImg={ni} name={"Favour Agbi"} />
                    <ImgFeed bgImg={F} roundImg={F} name={"Peace Agbi"} />
                </div>
           </div>


           <Advert />
           <InputArea />
           <Posts />
        </div>
    
    )
}

export default Feed
