import axiosInstance from "../utilities/axiosInstance";
const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/";

const fetchNews = async () => {

  console.log(process.env.NODE_ENV);
  return await axiosInstance.get(url + "news").then((response) => {
    return response.data.results;
  });
};

export { fetchNews };
