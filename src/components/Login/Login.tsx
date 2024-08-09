"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import ChatRoom from "../ChatRoom/ChatRoom";
import { RxGithubLogo } from "react-icons/rx";

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
    <>
      Not signed in <br />
      <div className="signIn">
        <h2>Sign In to continue</h2>

        <div className="github">
          <button onClick={() => signIn("github")}>
            <RxGithubLogo />
          </button>
        </div>
      </div>
    </>
  );
}
