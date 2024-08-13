"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var http = __importStar(require("http"));
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
