const { Server } = require("socket.io");
const config = require("config");
const path = require("path");
const fileSystem = require("fs");

const io = new Server(config.SOCKET_PORT);

const listenersPath = path.join(__dirname, "listeners");

fileSystem
    .readdirSync(listenersPath)
    .map(item => path.join(listenersPath, item))
    .forEach(item => {
        const listener = require(item);
        listener(io);
    });

module.exports = io;