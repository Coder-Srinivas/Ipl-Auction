const axios = require('axios');
const url = process.env.BACKEND_URL || "http://localhost:8000/";

const login = (email, password) => {
    console.log(email, password);
    axios.post(url + 'login', {
        email,
        password
    }).then((response) => {
        if(response.data.success){
            
        }
        return response.data;
    }).catch((error) => {
        return error.message;
    });
}

const register = (username, email, password) => {
    console.log(email, password);
    axios.post(url + 'signup', {
        email,
        password,
        username
    }).then((response) => {
        return ;
    }).catch((error) => {
        console.log(error.message);
    });
}

module.exports = {login, register}