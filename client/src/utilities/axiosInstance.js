const axios = require("axios");

const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/";
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: url,
});

export default axiosInstance;
