const axiosInstance = require('../utilities/axiosInstance');
const url = process.env.BACKEND_URL || "http://localhost:8000/";

const fetchNews = async () => {
    return await axiosInstance.get(url + 'news').then((response) => {
        return response.data.results;
    })
}

module.exports = { fetchNews }
