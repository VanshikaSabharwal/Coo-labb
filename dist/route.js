"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var http = require("http");
var socket_io_1 = require("socket.io");
var app = Express();
var server = http.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", function (socket) {
    console.log("New client connected:", socket.id);
    // Handle private messages
    socket.on("private_message", function (data) {
        io.to(data.receiverId).emit("private_message", {
            senderId: socket.id,
            message: data.message,
        });
    });
    // Join a room
    socket.on("join_room", function (roomId) {
        socket.join(roomId);
    });
    // Leave a room
    socket.on("leave_room", function (roomId) {
        socket.leave(roomId);
    });
    socket.on("disconnect", function () {
        console.log("Client disconnected:", socket.id);
    });
});
var PORT = process.env.PORT || 4000;
server.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
