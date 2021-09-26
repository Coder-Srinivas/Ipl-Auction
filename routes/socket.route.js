const {
  create,
  join,
  start,
  play,
  bid,
  next,
  checkUser,
  serverUsers,
  exitUser,
} = require("../controller/game");

const socketRouter = (io) => {
  io.on("connection", (socket) => {
    socket.on("check-user", ({ user }) => {
      checkUser(socket, user);
    });

    socket.on("createAuction", (data) => {
      create(io, socket, data);
    });

    socket.on("joinAuction", (data) => {
      join(io, socket, data);
    });

    socket.on("requestPlay", (data) => {
      start(io, data);
    });

    socket.on("start", (data) => {
      play(data);
    });

    socket.on("bid", (data) => {
      bid(socket, data);
    });

    socket.on("next", (data) => {
      next(io, data);
    });

    socket.on("server-users", ({ room }) => {
      serverUsers(io, room);
    });

    socket.on("exit", (data) => {
      exitUser(io, data);
    });
  });
};

module.exports = socketRouter;
