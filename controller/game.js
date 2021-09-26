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
  auction.startAuction();
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
  auction.next(squads, liveAuctions, data.room);
};

const checkUser = (socket, user) => {
  let toBeFound;
  let room;

  for (let [key, value] of liveAuctions) {
    const find = value.findUser(user.username);
    if (value.findUser(user.username)) {
      if (find) {
        toBeFound = find;
        room = key;
        break;
      }
    }
  }

  if (toBeFound) {
    socket.join(room);
    socket.emit("existing-user", {
      room: room,
      users: liveAuctions.get(room).fetchPlayers(),
      initial: liveAuctions.get(room).getCurrentPlayer(),
      started: liveAuctions.get(room).getStatus(),
    });
  } else {
    socket.emit("no-existing-user");
  }
};

const serverUsers = (io, room) => {
  const auction = liveAuctions.get(room);
  if (!auction) {
    return;
  }
  io.to(room).emit("users", {
    users: auction.users,
  });
};

const exitUser = (io, data) => {
  const auction = liveAuctions.get(data.room);
  auction.removeUser(data.user);
  if (auction.users.length === 0) {
    liveAuctions.delete(data.room);
  }
  serverUsers(io, data.room);
};

module.exports = {
  create,
  join,
  start,
  play,
  bid,
  next,
  checkUser,
  serverUsers,
  exitUser,
};
