import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';
import { register } from '../services/auth.service';
import { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        register(username, email, password).then((data) => {

        }).catch((error) => {

        });
    }
    return(
        <div className="login">
            <div className="login-container">
                <h3 className="login-container-title">Sign Up</h3>

                <div className="login-container-input-container">
                    <h4 className="login-container-desc">Username: </h4>
                    <FontAwesomeIcon icon={faUser} className="login-container-user-icon"/>
                    <input 
                    className="login-container-input"
                    placeholder="Enter your username"
                    type="username"
                    onChange={handleUsernameChange}>
                    </input>
                </div>

                <div className="login-container-input-container">
                    <h4 className="login-container-desc">Email: </h4>
                    <FontAwesomeIcon icon={faEnvelope} className="login-container-user-icon"/>
                    <input 
                    className="login-container-input"
                    placeholder="Enter your email address"
                    type="email"
                    onChange={handleEmailChange}>
                    </input>
                </div>

                <div className="login-container-input-container">
                    <h4 className="login-container-desc">Password: </h4>
                    <FontAwesomeIcon icon={faLock} className="login-container-user-icon"/>
                    <input 
                    className="login-container-input"
                    placeholder="Enter your password"
                    type="password"
                    onChange={handlePasswordChange}>
                    </input>
                </div>

                <button onClick={handleSubmit}>Sign up</button>

            </div>
        </div>
    )
}

export default Register
