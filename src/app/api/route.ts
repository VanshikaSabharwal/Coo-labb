const Express = require("express");
import * as http from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

const app = Express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("New client connected:", socket.id);

  // Handle private messages
  socket.on(
    "private_message",
    (data: { receiverId: string; message: string }) => {
      io.to(data.receiverId).emit("private_message", {
        senderId: socket.id,
        message: data.message,
      });
    }
  );

  // Join a room
  socket.on("join_room", (roomId: string) => {
    socket.join(roomId);
  });

  // Leave a room
  socket.on("leave_room", (roomId: string) => {
    socket.leave(roomId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
