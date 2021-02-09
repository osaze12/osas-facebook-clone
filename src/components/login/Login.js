import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import './Login.css';

function Login(props) {

    console.log("login", props);
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        let gottenName = name.length > 1;
        let gottenPassword = password.length > 1;

        if (gottenName && gottenPassword){
            //SAVE USERNAME TO LOCAL STORAGE
            props.dispatch({type:"L", payload: name})
            setName('');
            setPassword('');
        }
    }

    return (
        <div className="login">
            <div className="logo">
                <span><FontAwesomeIcon icon={faFacebook} /></span>
            </div>
            <div className="formInput">
                <form onSubmit={(e) => handleLoginSubmit(e)}>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder=" Your User Name..." 
                        value={name} 
                        onChange={(e) => handleNameChange(e)}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder=" Password" 
                        value={password} 
                        onChange={(e) => handlePasswordChange(e)} 
                    />

                    <button >Login</button>
                </form>
            </div>
            
        </div>
    )
}
export default connect() (Login); 