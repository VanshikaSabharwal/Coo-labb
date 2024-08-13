"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSession } from "next-auth/react";
var ChatRoom = function () {
    var _a;
    var session = useSession().data;
    return (<div>
      {session ? (<div className="container flex align-center justify-center flex-col">
          <Navbar />
          <h1 className="h-12 flex items-center justify-center text-center rounded border-blue-500 border-2">
            Welcome to Coo-labb! {(_a = session.user) === null || _a === void 0 ? void 0 : _a.name}{" "}
          </h1>
        </div>) : (" ")}
    </div>);
};
export default ChatRoom;
