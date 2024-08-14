// components/ChatRoom.tsx
"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSession } from "next-auth/react";
import OneToOneChat from "../OneToOneChat/OneToOneChat";

const ChatRoom = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className="container flex align-center justify-center flex-col">
          <Navbar />
          <h1 className="h-12 flex items-center justify-center text-center rounded border-blue-500 border-2">
            Welcome to Coo-labb! {session.user?.name}{" "}
          </h1>

          <OneToOneChat receiverId="someReceiverId" />
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default ChatRoom;
