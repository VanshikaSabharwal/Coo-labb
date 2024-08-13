"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
var NextServer = function (_a) {
    var children = _a.children;
    return <SessionProvider>{children}</SessionProvider>;
};
export default NextServer;
