import axiosInstance from "../utilities/axiosInstance";

const fetchSquads = async () => {
  return await axiosInstance.get("players").then((response) => {
    return response.data;
  });
};

export { fetchSquads };
