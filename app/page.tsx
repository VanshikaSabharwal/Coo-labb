"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import ChatRoom from "@/app/components/ChatRoom/ChatRoom";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <ChatRoom />
      </>
    );
  }
  return (
    <div className="signIn flex items-center justify-center flex-col h-full w-screen">
      <div className="rounded border-2 w-1/2 h-96 flex items-center justify-center flex-col">
        <h2 className=" text-center text-2xl ">Sign In to continue</h2>

        <div className="github text-center">
          <button onClick={() => signIn("github")}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
