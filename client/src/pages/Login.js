import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';
import { login } from '../services/auth.service';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    }
    return(
        <div className="login">
            <div className="login-container">
                <h3 className="login-container-title">Login</h3>

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

                <button onClick={handleSubmit}>Login</button>
                <div className="login-container-reg-forget">
                    <div className="login-container-desc--2">
                        New User? <Link to="/signup"> Click here</Link>
                    </div>

                    <div className="login-container-desc--2">
                        <Link to="/reset/forgot">Forgot Password?</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
