const liveAuctions = new Map();
const Auction = require('./auction');

// Called while creating a game
const create = (io, socket, data) => {
    socket.join(data.room);
    const auction = new Auction(io.to(data.room));
    auction.addUser(data.username);
    liveAuctions.set(data.room, auction);
    io.to(data.room).emit('users', {
      users: auction.users
    })
};

// Called while joining a game
const join = (io, socket, data) => {
    const auction = liveAuctions.get(data.room);
    if(!auction){
      console.log(data, "Room does not exist");
      return socket.emit("join-result", {
        success: false,
        error: "Room does not exist!!"
      })
    }
    auction.addUser(data.username);
    socket.join(data.room);
    socket.emit("join-result", {
      success: true,
      room: data.room,
      error: ''
    })
    io.to(data.room).emit("users", {
      users: auction.users
    })
};

const start = (io, data) => {
  console.log("Requested to start the game");
  io.to(data.room).emit("start");
}

const play = (io, socket, data) => {
  const auction = liveAuctions.get(data.room);
  auction.startInterval();
}

module.exports = {
  create, join, start, play
};
