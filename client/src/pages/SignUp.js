import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from  '@fortawesome/free-solid-svg-icons';
import { faUser } from  '@fortawesome/free-solid-svg-icons';
import { register } from '../services/auth.service';
import { useState } from 'react';
import Form from '../components/Form';
const { handleChange, handleEmailChange, handlePasswordChange } = require('../utilities/handleChanges');

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        form: ''
    })

    const data = [
        {
            type: "username",
            title: "Username",
            placeholder: "Enter your username", 
            onChange: (value) => {handleChange(value, setUsername)}, 
            icon: faUser,
            error: errors.email
        },
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
        const data = await register(username, email, password);
    
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
            title = "Sign Up"
            data = {data}
            onFormSubmit = {handleSubmit}
            error = {errors.form}
        />
    )
}

export default SignUp
