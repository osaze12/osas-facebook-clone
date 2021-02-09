import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavItem(props) {
    return (
        <div className="navInner" >
            
             <props.element  className={props.class}><FontAwesomeIcon icon={props.icon}/> </props.element>
            
        </div>
    )
}

export default NavItem
