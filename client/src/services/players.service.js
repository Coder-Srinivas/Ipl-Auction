import axiosInstance from "../utilities/axiosInstance";
const url =
  process.env.NODE_ENV === "production"
    ? "https://ipl-mega-auction.herokuapp.com/"
    : "http://localhost:8000/";

const fetchSquads = async () => {
  return await axiosInstance.get(url + "players").then((response) => {
    return response.data;
  });
};

export { fetchSquads };
