const { create, join, start, play } = require('../controller/game');

const socketRouter = (io) => {

    io.on('connection', socket => {
        console.log('Socket connected', socket.id);

        socket.on('createAuction', data => {
            create(io, socket, data);
        });
        socket.on('joinAuction', data => {
            join(io, socket, data);
        });
        socket.on('requestPlay', data => {
            start(io, data);
        })
        socket.on('start', data => {
            play(io, socket, data);
        })
    });
};

module.exports = socketRouter;
