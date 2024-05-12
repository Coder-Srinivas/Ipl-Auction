const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const socketio = require("socket.io");
const http = require("http");
const userRouter = require("./routes/user.route");
const newsRouter = require("./routes/news.route");
const auctionRouter = require("./routes/auction.route");
// const User = require("./database/models/user.model");
const path = require("path");
require("dotenv").config();
require("./database/connection");

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

//Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(userRouter);
app.use(newsRouter);
app.use(auctionRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

require("./routes/socket.route")(io);

server.listen(process.env.PORT || 8000, () => {
  //User.collection.deleteMany({});
  console.log("Listening on port 8000");
});
