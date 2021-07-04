import io from "socket.io-client";

const url = process.env.BACKEND_URL || "http://localhost:8000/";
let socket;

const connect = () => {
  socket = io(url);
};

const join = (roomName, username) => {
  if (!socket) {
    connect();
  }
  socket.emit("joinAuction", {
    username,
    roomName,
  });
};

const create = (roomName, username) => {
  if (!socket) {
    connect();
  }
  socket.emit("createAuction", {
    username,
    roomName,
  });
};

socket.on("joinAuction", () => {});
export { create, join };
