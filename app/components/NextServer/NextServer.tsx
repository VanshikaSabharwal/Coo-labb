"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";
interface NextServer {
  children: any;
}
const NextServer: React.FC<NextServer> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextServer;
