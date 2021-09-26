import axiosInstance from "../utilities/axiosInstance";

const fetchAuctions = async () => {
  return await axiosInstance.get("played-auctions").then((response) => {
    return response.data;
  });
};

export { fetchAuctions };
