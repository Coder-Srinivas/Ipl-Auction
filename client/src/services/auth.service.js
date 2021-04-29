const axios = require('axios');
const url = process.env.BACKEND_URL || "http://localhost:8000/";
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: url
})

const login = async (email, password) => {
    return await axiosInstance.post(url + 'login', {
        email,
        password
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return {
            success: false,
            message: "Sorry, the credentials you entered, do not match."
        };
    });
}

const register = async (username, email, password) => {
    return await axiosInstance.post(url + 'signup', {
        email,
        password,
        username,
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return {
            success: false,
            message: "Opps, something went wrong. Try again."
        };
    });
}

const authorization = async () => {
    return await axiosInstance.get(url + 'authenticate', {}).then((response) => {
        return response.data;
    }).catch((error) => {
        return {
            success: false,
            message: "Not authorized"
        }

    })
}

module.exports = {login, register, authorization}
