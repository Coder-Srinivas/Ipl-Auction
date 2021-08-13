const axiosInstance = require("../utilities/axiosInstance");
const url = process.env.BACKEND_URL || "http://localhost:8000/";

const fetchSquads = async () => {
  return await axiosInstance.get(url + "players").then((response) => {
    return response.data;
  });
};

export { fetchSquads };
