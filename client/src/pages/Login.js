import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';
import { login } from '../services/auth.service';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utilities/validation';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        form: ''
    })
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if(!validateEmail(email)){
            return setErrors(prev => ({
                ...prev,
                email: 'Please enter a valid email.'
            }));
        }else{
            setErrors(prev => ({
                ...prev,
                email: ''
            }))
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if(!validatePassword(password)){
            return setErrors(prev => ({
                ...prev,
                password: 'Password should contain at least 1 special character, 1 uppercase character, 1 lowercase character and 1 number.'
            }));
        }else{
            setErrors(prev => ({
                ...prev,
                password: ''
            }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(errors.email !== '' || errors.password !== ''){
            return;
        }
        const data = await login(email, password);

        if(!data.success){
            return setErrors(prev => ({
                ...prev,
                form: data.message
            }));
        }

        setErrors(prev => ({
            ...prev,
            form: ''
        }))

        console.log(data);
    }
    return(
        <div className='login'>
            <div className='login-container'>
                <h3 className='login-container-title'>Login</h3>
                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <div className='login-container-input-container'>
                            <label htmlFor='email' className='login-container-desc'>Email: </label>
                            <FontAwesomeIcon icon={faEnvelope} className='login-container-user-icon'/>
                            <input 
                                id='email'
                                className='login-container-input'
                                placeholder='Enter your email address'
                                type='email'
                                onChange={handleEmailChange}>
                            </input>
                            <p className={errors.email === '' ? 'invisible' : 'error'}>{errors.email}</p>
                        </div>

                        <div className='login-container-input-container'>
                            <label htmlFor='password' className='login-container-desc'>Password: </label>
                            <FontAwesomeIcon icon={faLock} className='login-container-user-icon'/>
                            <input
                                id='password'
                                className='login-container-input'
                                placeholder='Enter your password'
                                type='password'
                                onChange={handlePasswordChange}>
                            </input>
                            <p className={errors.password === '' ? 'invisible' : 'error'}>{errors.password}</p>
                        </div>

                        <input type='submit' value='Login'/>
                    </form>
                    <p className={errors.form === '' ? 'invisible' : 'error'}>{errors.form}</p>

                <div className='login-container-reg-forget'>
                    <div className='login-container-desc--2'>
                        New User? <Link to='/signup'> Click here</Link>
                    </div>

                    <div className='login-container-desc--2'>
                        <Link to='/reset/forgot'>Forgot Password?</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
