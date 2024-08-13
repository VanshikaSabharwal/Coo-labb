// components/ChatRoom.tsx
import React, { useState, useEffect } from "react";
import useSocket from "../../../hooks/useSocket";

const ChatRoom: React.FC = () => {
  const socket = useSocket("http://localhost:4000");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const handlePrivateMessage = (data: {
      senderId: string;
      message: string;
    }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `${data.senderId}: ${data.message}`,
      ]);
    };

    if (socket) {
      socket.on("private_message", handlePrivateMessage);
      return () => {
        socket.off("private_message", handlePrivateMessage);
      };
    }
  }, [socket]);

  return (
    <div>
      <h2>Receiver Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
