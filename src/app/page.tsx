"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import ChatRoom from "@/src/components/ChatRoom/ChatRoom";
import { RxGithubLogo } from "react-icons/rx";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getServerSession } from "next-auth";
import OneToOneChat from "../components/OneToOneChat/OneToOneChat";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Chat App</h1>
        <OneToOneChat receiverId="hello" />
        <ChatRoom />
      </>
    );
  }
  return (
    <div className="signIn flex items-center justify-center flex-col h-full w-screen">
      <div className="rounded border-2 w-1/2 h-96 flex items-center justify-center flex-col">
        <h2 className=" text-center text-2xl ">Sign In to continue</h2>

        <div className="github text-center">
          <button onClick={() => signIn("github")}>
            <RxGithubLogo className="w-10 h-10 my-1 mx-1" />
          </button>
          <button onClick={() => signIn("google")}>
            <AiFillGoogleCircle className="w-10 h-10 my-1 mx-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
