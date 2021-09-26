import axiosInstance from "../utilities/axiosInstance";

const fetchNews = async () => {
  return await axiosInstance.get("news").then((response) => {
    return response.data.results;
  });
};

export { fetchNews };
