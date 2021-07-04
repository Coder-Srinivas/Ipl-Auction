const schedule = require("node-schedule");
const squadData = require("../data/squads.json");
const getSquads = require("../utilities/players");
const Auction = require("./auction");

const liveAuctions = new Map();
let squads = squadData;

schedule.scheduleJob("fetching-squads", "0 0 * * *", () => {
  try {
    getSquads().then((response) => {
      squads = response;
    });
  } catch (error) {
    squads = squadData;
  }
});

// Called while creating a game
const create = (io, socket, data) => {
  socket.join(data.room);
  const auction = new Auction(io.to(data.room));
  auction.addUser(data.username);
  liveAuctions.set(data.room, auction);
  io.to(data.room).emit("users", {
    users: auction.users,
  });
};

// Called while joining a game
const join = (io, socket, data) => {
  const auction = liveAuctions.get(data.room);
  if (!auction) {
    console.log(data, "Room does not exist");
    return socket.emit("join-result", {
      success: false,
      error: "Room does not exist!!",
    });
  }
  auction.addUser(data.username);
  socket.join(data.room);
  socket.emit("join-result", {
    success: true,
    room: data.room,
    error: "",
  });
  io.to(data.room).emit("users", {
    users: auction.users,
  });
};

const start = (io, data) => {
  io.to(data.room).emit("start");
};

const play = (data) => {
  const auction = liveAuctions.get(data.room);
  auction.servePlayer(squads);
  auction.startInterval();
};

const bid = (socket, data) => {
  const auction = liveAuctions.get(data.room);
  auction.bid(socket, data.user);
  auction.displayBidder();
};

const next = (io, data) => {
  const auction = liveAuctions.get(data.room);
  auction.next(squads);
};

module.exports = {
  create,
  join,
  start,
  play,
  bid,
  next,
};
