"use client"; // components/OneToOneChat.tsx
import React, { useState, useEffect } from "react";
import useSocket from "../../../hooks/useSocket";

interface OneToOneChatProps {
  receiverId: string;
}

const OneToOneChat: React.FC<OneToOneChatProps> = ({ receiverId }) => {
  const socket = useSocket("http://localhost:4000");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (socket) {
      socket.emit("private_message", { receiverId, message });
      setMessage("");
    }
  };

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
      <h2>Sender Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default OneToOneChat;
