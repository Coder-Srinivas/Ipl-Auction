import axiosInstance from "../utilities/axiosInstance";
const url = process.env.NODE_ENV === "production"? 
"https://ipl-mega-auction.herokuapp.com/" 
: "http://localhost:8000/";

const fetchNews = async () => {
  return await axiosInstance.get(url + "news").then((response) => {
    return response.data.results;
  });
};

export { fetchNews };
