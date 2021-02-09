import React from 'react';
import {connect } from 'react-redux';

function LoginScreen(props) {
    const hi =()=>{
        props.dispatch({type:"L", payload: "name"});
    }
    return (
        <div>
            <button onClick={hi}>HI</button>
        </div>
    )
}

export default connect() (LoginScreen)
