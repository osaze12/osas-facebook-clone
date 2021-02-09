import '../nav/Nav.css';
import { faFacebook, faFacebookMessenger, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHome, faStore, faUsers, faPlus, faBell, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import NavInner from './NavItem';

import React from 'react'

function Nav() {
    return (
        <div className="nav">
            <div className="nav__left">
            <a href="www.facebook.com" ><NavInner class={"nav__logo"} icon={faFacebook} element={"div"}/></a>
                <div className="nav__search" > 
                    <form>
                        <input type="text" name="search" placeholder="Search Facebook" />
                        <NavInner  class={"nav__search_icon"} icon={faSearch} element={"span"}/>

                    </form>          
                </div>
            </div>
            <div className="nav__center">
                <a href="www.facebook.com" ><NavInner class={"home_logo"} icon={faHome} element={"div"} /></a>
                <a href="www.facebook.com/videos" ><NavInner class={"video_logo"} icon={faYoutube} element={"div"} /></a>
                <a href="www.facebook.com/market" ><NavInner class={"market_logo"} icon={faStore} element={"div"}/></a>
                <a href="www.facebook.com/groups" ><NavInner class={"group_logo"} icon={faUsers} element={"div"}/></a>
            </div>
            <div className="nav__right">
                <a href="www.facebook.com/add" ><NavInner class={"plus_logo round"} icon={faPlus} element={"div"}/></a>
                <a href="www.facebook.com/messenger" ><NavInner class={"chat_logo round"} icon={faFacebookMessenger} element={"div"}/></a>
                <a href="www.facebook.com/notification" ><NavInner class={"noti_logo round"} icon={faBell} element={"div"}/></a>
                 <a href="www.facebook.com/more" ><NavInner class={"angle_down_logo round"} icon={faAngleDown} element={"div"}/></a>
            </div>
            
            
        </div>
    )
}

export default Nav
