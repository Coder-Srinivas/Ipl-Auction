import axiosInstance from "../utilities/axiosInstance";
const url =
  process.env.NODE_ENV === "production"
    ? "https://ipl-mega-auction.herokuapp.com/"
    : "http://localhost:8000/";

const login = async (email, password) => {
  return await axiosInstance
    .post(url + "login", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const register = async (username, email, password) => {
  return await axiosInstance
    .post(url + "signup", {
      email,
      password,
      username,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

const logout = async () => {
  return await axiosInstance.get(url + "logout").then((response) => {
    return response.data;
  });
};

export { login, register, logout };
