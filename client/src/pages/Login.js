import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';
import { login } from '../services/auth.service';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const { handleEmailChange, handlePasswordChange } = require('../utilities/handleChanges');
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        form: ''
    })
    
    const message = () => {
        return(
            <div className='form-container-additional'>
                <div className='form-container-desc--2'>
                    New User? <Link to='/signup'> Click here</Link>
                </div>

                <div className='form-container-desc--2'>
                    <Link to='/reset/forgot'>Forgot Password?</Link>
                </div>
            </div>
        )
    }

    const data = [
        {
            type: "email",
            title: "Email",
            placeholder: "Enter your email", 
            onChange: (value) => {handleEmailChange(value, setEmail, setErrors)}, 
            icon: faEnvelope,
            error: errors.email
        },
        {
            type: "password",
            title: "Password",
            placeholder: "Enter your Password", 
            onChange: (value) => {handlePasswordChange(value, setPassword, setErrors)}, 
            icon: faLock,
            error: errors.password
        },
    ]

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
        <Form
            title = "Login"
            data = {data}
            onFormSubmit = {handleSubmit}
            message = {message}
            error = {errors.form}
        />
    )
}

export default Login
