const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const socketio = require('socket.io');
const http = require('http');
const userRouter = require('./routes/user.route');
const newsRouter = require('./routes/news.route');
const playerRouter = require('./routes/players.route');
const User = require('./database/models/user.model');
require('dotenv').config()
require('./database/connection');

const clientUrl = process.env.DEV_REACT_URL || "http://localhost:3000";
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Middleware
app.use(cookieParser());
app.use(cors({
    origin: clientUrl,
    credentials: true
    }));
app.use(helmet());
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use(userRouter);
app.use(newsRouter);
app.use(playerRouter);

const rooms = new Set();
io.on('connection', (socket) => {

    socket.on('create', ({room}, callback) => {
        if(rooms.has(room)){
            callback("That auction is taken!!! Try a different one", null);
            return;
        }
    })
    console.log("New connection");
})

server.listen(8000, () => {
    User.collection.deleteMany({});
    console.log("Listening on port 8000")
})
