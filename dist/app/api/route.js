import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
var app = express();
var server = http.createServer(app);
var io = new SocketIOServer(server);
io.on("connection", function (socket) {
    console.log("new client connected", socket.id);
    // one to one chat
    socket.on("private_message", function (data) {
        io.to(data.recieverId).emit("private_message", data);
    });
    // group chat
    socket.on("join_group", function (groupId) {
        socket.join(groupId);
    });
    socket.on("group_message", function (data) {
        io.to(data.groupId).emit("group_message", data);
    });
    socket.on("disconnect", function () {
        console.log("client disconnected", socket.id);
    });
});
var PORT = process.env.PORT || 4000;
server.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
